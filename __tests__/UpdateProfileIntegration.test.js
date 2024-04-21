//UpdateProfileIntegration.test.js
import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { doc, getDoc, serverTimestamp, updateDoc } from 'firebase/firestore';
import UpdateProfile from '../screens/profile/UpdateProfile';

// Mock des dépendances Firebase
jest.mock('../firebase/firebaseConfig', () => ({
  db: {}, // Mock de la base de données Firebase
  authentication: {
    currentUser: {
      uid: 'userId123', // Mock de l'ID de l'utilisateur actuellement connecté
    },
  },
}));

// Mock des fonctions d'accès à Firestore
jest.mock('firebase/firestore', () => ({
  doc: jest.fn(), // Mock de la fonction doc Firestore
  getDoc: jest.fn(() => ({
    exists: true, // Mock de la fonction exists pour simuler l'existence du document
    data: jest.fn(() => ({ // Mock de la fonction data pour renvoyer les données de l'utilisateur
      email: 'test@example.com',
      username: 'TestUser',
      avatarUrl: 'https://example.com/avatar.jpg',
    })),
  })),
  updateDoc: jest.fn(), // Mock de la fonction updateDoc Firestore
}));

describe('UpdateProfile Component', () => {
  test('calls updateUserProfile function on button press and navigates to Home screen', async () => {
    const { getByText } = render(
      <NavigationContainer>
        <UpdateProfile />
      </NavigationContainer>
    );

    const saveButton = getByText('Save Changes');
    fireEvent.press(saveButton);

    // Attendre que la mise à jour du profil soit effectuée
    await waitFor(() => {
      // Vérifier que les données du profil ont été correctement mises à jour
      expect(updateDoc).toHaveBeenCalledWith(expect.anything(), {
        email: 'test@example.com',
        username: 'TestUser',
        avatarUrl: 'https://example.com/avatar.jpg',
        updateDate: expect.anything()
      });

      // Vérifier que la navigation vers l'écran "Home" est effectuée
      expect(navigation.navigate).toHaveBeenCalledWith('Home');
    });
  });
});
