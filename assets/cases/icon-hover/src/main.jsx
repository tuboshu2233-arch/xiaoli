import React from 'react';
import {createRoot} from 'react-dom/client';
import UseIconGallery from '../../../../components/react-bits/UseIconGallery';
import icons from '../icons.json';
import animations from './animations';
createRoot(document.querySelector('#root')).render(<UseIconGallery icons={icons} animations={animations} mode="hover"/>);
