import React, { useState } from 'react';
import Modal from './Modal'; 

const DemoPage = () => {
  const [modalOpen, setModalOpen] = useState({
    noButtons: false,
    oneButton: false,
    twoButtons: false,
    withTitle: false,
    withoutTitle: false,
    customColors: false,
  });

  const openModal = (type) => setModalOpen((prev) => ({ ...prev, [type]: true }));
  const closeModal = (type) => setModalOpen((prev) => ({ ...prev, [type]: false }));

  const primaryAction = () => { console.log('Primary action clicked'); };
  const secondaryAction = () => { console.log('Secondary action clicked'); };

  return (
    <div className="main-container">
      <div className='buttons-container'>
      {/* Boutons pour chaque modal */}
      <button onClick={() => openModal('noButtons')}>Modal without buttons & title</button>
      <button onClick={() => openModal('oneButton')}>Modal with one button</button>
      <button onClick={() => openModal('twoButtons')}>Modal with two buttons</button>
      <button onClick={() => openModal('withTitle')}>Modal with title</button>
      <button onClick={() => openModal('customColors')}>Modal with custom background and text color</button>

      </div>

      {/* Modal 1 - Sans boutons et sans titre*/}
      <Modal
        isOpen={modalOpen.noButtons}
        text="This modal has no buttons & no title."
        onClose={() => closeModal('noButtons')}
      />

      {/* Modal 2 - Avec un bouton */}
      <Modal
        isOpen={modalOpen.oneButton}
        title="One Button Modal"
        text="This is a modal with a primary button."
        onClose={() => closeModal('oneButton')}
        primaryButton={{ label: 'Confirm', onClick: () => { primaryAction(); closeModal('oneButton'); } }}
      />

      {/* Modal 3 - Avec deux boutons */}
      <Modal
        isOpen={modalOpen.twoButtons}
        title="Two Buttons Modal"
        text="This modal has both a primary and a secondary button."
        onClose={() => closeModal('twoButtons')}
        primaryButton={{ label: 'Decline', onClick: () => { primaryAction(); closeModal('twoButtons'); } }}
        secondaryButton={{ label: 'Accept', onClick: () => { secondaryAction(); closeModal('twoButtons'); } }}
        buttonStyle={{
          primary: {
            backgroundColor: '#f9f5ff', 
            color: 'black',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          },
          secondary: {
            backgroundColor: '#721cd4',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          },
        }}
      />

      {/* Modal 4 - Avec titre */}
      <Modal
        isOpen={modalOpen.withTitle}
        title="Modal with Title"
        text="This modal has a title."
        onClose={() => closeModal('withTitle')}
      />


      {/* Modal 6 - Avec couleurs personnalisées */}
      <Modal
        isOpen={modalOpen.customColors}
        title="Custom Colored Modal"
        text="This modal has custom background and text colors."
        backgroundColor="#333"
        textColor="#fff"
        onClose={() => closeModal('customColors')}
        primaryButton={{ label: 'Close', onClick: () => closeModal('customColors') }}
        buttonStyle={{
          primary: {
            backgroundColor: '#86efac', // Vert
            color: 'black',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '5px',
            cursor: 'pointer',
          }
        }}
      />
    </div>
  );
};

export default DemoPage;

