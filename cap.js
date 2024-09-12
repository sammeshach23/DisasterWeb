// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-app.js";
import { getFirestore, collection, addDoc, onSnapshot } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-firestore.js";
import { getStorage, ref, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.20.0/firebase-storage.js";

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyBimDswyRQt8e6Fqt8775Jq3McQc875FBg",
    authDomain: "disasternet-2e29f.firebaseapp.com",
    projectId: "disasternet-2e29f",
    storageBucket: "disasternet-2e29f.appspot.com",
    messagingSenderId: "578295594797",
    appId: "1:578295594797:web:44f91f09c3c1b838911da4",
    measurementId: "G-3FB5HKW9MZ"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

// Handle Image Upload and Comments
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('upload-form').addEventListener('submit', async (event) => {
        event.preventDefault();

        const imageInput = document.getElementById('imageInput');
        const commentInput = document.getElementById('commentInput');
        const locationInput = document.getElementById('locationInput');

        const imageFile = imageInput.files[0];
        const comment = commentInput.value;
        const location = locationInput.value;

        if (imageFile) {
            const imageRef = ref(storage, images/$,{imageFile,name});
            try {
                await uploadBytes(imageRef, imageFile);
                const imageUrl = await getDownloadURL(imageRef);

                await addDoc(collection(db, 'posts'), {
                    imageUrl: imageUrl,
                    comment: comment,
                    location: location,
                    timestamp: new Date()
                });

                imageInput.value = '';
                commentInput.value = '';
                locationInput.value = '';

                displayPostsFromFirebase();
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        } else {
            console.error('No image file selected.');
        }
    });

    function displayPostsFromFirebase() {
        const postsRef = collection(db, 'posts');
        const postsList = document.getElementById('posts-list');

        onSnapshot(postsRef, (snapshot) => {
            postsList.innerHTML = '';

            snapshot.forEach(doc => {
                const post = doc.data();
                const postItem = document.createElement('div');
                postItem.classList.add('card', 'mb-3');
                postItem.innerHTML = `
                    <img src="${post.imageUrl}" class="card-img-top" alt="Image">
                    <div class="card-body">
                        <p class="card-text">${post.comment}</p>
                        <p class="card-text"><small class="text-muted">Location: ${post.location}</small></p>
                        <p class="card-text"><small class="text-muted">Posted on: ${new Date(post.timestamp.toDate()).toLocaleString()}</small></p>
                    </div>
                `;
                postsList.appendChild(postItem);
            });
        });
    }

    fetchRecentDisasters();
    displayPostsFromFirebase();
});