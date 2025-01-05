import React from 'react';
import { IconTeapot } from '@tabler/icons-react';
import { FaUser  } from 'react-icons/fa'; // Иконка человека

const TeaCeremonyMasterIcon = () => {
    return (
        <div style={{ display: 'flex', alignItems: 'center',  justifyContent: 'center', marginBottom: '22px'}}>
            <FaUser  size={60} color="#4CAF50" style={{ marginRight: '10px' }} />
            <IconTeapot size={60} color="#D2691E" />
        </div>
    );
};

export default TeaCeremonyMasterIcon;