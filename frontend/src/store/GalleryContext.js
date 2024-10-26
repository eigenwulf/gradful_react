import { createContext, useContext, useState } from 'react';

// 1. create context object and export it for use with useContext
const GalleryContext = createContext ();

export const useGalleryContext = () => {
    return useContext(GalleryContext);
};

// 2. specify context provider object

export const GalleryProvider = ({ children }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    return (
        <GalleryContext.Provider value={{ selectedCard, setSelectedCard }}>
            {children}
        </GalleryContext.Provider>
    );
};

