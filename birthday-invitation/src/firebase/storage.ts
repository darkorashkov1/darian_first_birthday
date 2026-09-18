import { getDatabase, ref, push, onValue, off } from 'firebase/database';
import { app } from './firebaseConfig';

const db = getDatabase(app);

// Compress image client-side to stay small
function compressImage(file: File): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = (event) => {
      const img = new Image();
      img.src = event.target?.result as string;
      img.onload = () => {
        const canvas = document.createElement('canvas');
        const MAX_WIDTH = 800;
        const MAX_HEIGHT = 800;
        let width = img.width;
        let height = img.height;

        if (width > height) {
          if (width > MAX_WIDTH) {
            height *= MAX_WIDTH / width;
            width = MAX_WIDTH;
          }
        } else {
          if (height > MAX_HEIGHT) {
            width *= MAX_HEIGHT / height;
            height = MAX_HEIGHT;
          }
        }

        canvas.width = width;
        canvas.height = height;
        const ctx = canvas.getContext('2d');
        ctx?.drawImage(img, 0, 0, width, height);

        const dataUrl = canvas.toDataURL('image/jpeg', 0.7);
        resolve(dataUrl);
      };
      img.onerror = (error) => reject(error);
    };
    reader.onerror = (error) => reject(error);
  });
}

export async function uploadPartyPhoto(file: File): Promise<string> {
  const base64String = await compressImage(file);
  const photosRef = ref(db, 'partyPhotos');

  // Push new photo to Realtime Database
  await push(photosRef, {
    url: base64String,
    createdAt: Date.now()
  });

  return base64String;
}

// Live real-time subscription function
export function subscribeToPartyPhotos(callback: (photos: string[]) => void) {
  const photosRef = ref(db, 'partyPhotos');

  // onValue listens for any additions/deletions live
  onValue(photosRef, (snapshot) => {
    if (!snapshot.exists()) {
      callback([]);
      return;
    }

    const data = snapshot.val();
    const photos: { url: string; createdAt: number }[] = Object.values(data);

    // Sort newest first
    photos.sort((a, b) => b.createdAt - a.createdAt);

    callback(photos.map(p => p.url));
  }, (error) => {
    console.error("Error listening to Realtime Database photos:", error);
    callback([]);
  });

  // Return unsubscribe function if ever needed
  return () => off(photosRef);
}