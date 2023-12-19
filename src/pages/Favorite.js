import React from 'react';
import HeaderPage from '../layouts/components/header';

const Favorite = () => {
    document.title="Favorite";
    return (
        <div>
        <HeaderPage></HeaderPage>
        <h1>Favorite page</h1>
        </div>
    );
};

export default Favorite;