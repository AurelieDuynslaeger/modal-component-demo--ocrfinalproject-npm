## Modal Component

A customizable and reusable modal component for React applications. Perfect for confirming actions like employee deletion or any other action requiring user confirmation. This component can be easily integrated into any React app and styled according to your design requirements.

## Installation

To install the modal component, you need to have React and ReactDOM installed in your project. If they aren't already, you can install them via npm:

```bash
npm install react react-dom
```

Then, you can install the `modal-component` via npm:

```bash
npm install modal-component-ocr-finalproject
```

Or, if you use Yarn:

```bash
yarn add modal-component-ocr-finalproject
```

## Usage

Here's a basic example of how to use the `Modal` component in your project:

```jsx
import React, { useState } from 'react';
import Modal from 'modal-component-ocr-finalproject';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);

  const primaryAction = () => {
    console.log('Primary action executed!');
    handleClose();
  };

  const secondaryAction = () => {
    console.log('Secondary action executed!');
    handleClose();
  };

  return (
    <div>
      <button onClick={handleOpen}>Open Modal</button>
      <Modal
        isOpen={isOpen}
        title="Delete Employee"
        text="Are you sure you want to delete this employee?"
        onClose={handleClose}
        primaryButton={{ label: 'Delete', onClick: primaryAction, style: { backgroundColor: "#F5F9CE", color: "#000" } }}
        secondaryButton={{ label: 'Cancel', onClick: secondaryAction, style: { backgroundColor: "#ccc", color: "#000" } }}
        style={{
          backgroundColor: '#f9f9f9',
          color: '#333',
          padding: '30px',
          borderRadius: '8px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
        }}
      />
    </div>
  );
};

export default App;
```

## Props

| Prop              | Type     | Description                                                                                                                                      | Required | Default           |
|-------------------|----------|--------------------------------------------------------------------------------------------------------------------------------------------------|----------|-------------------|
| `isOpen`          | `bool`   | Determines if the modal is open or closed.                                                                                                       | Yes      | `false`           |
| `title`           | `string` | The title of the modal.                                                                                                                          | No       | `null`            |
| `text`            | `string` | The main text or content inside the modal.                                                                                                       | Yes      | N/A               |
| `onClose`         | `func`   | Callback function triggered when the modal is closed (either by clicking outside or pressing the escape key).                                     | Yes      | N/A               |
| `primaryButton`   | `object` | Object containing the label, onClick handler, and optional styles for the primary button.                                                         | No       | `null`            |
| `primaryButton.label`   | `string` | The text to display on the primary button.                                                                                                        | Yes      | N/A               |
| `primaryButton.onClick` | `func`   | The function to call when the primary button is clicked.                                                                                          | Yes      | N/A               |
| `primaryButton.style` | `object` | Custom styles for the primary button, passed as an object of CSS properties.                                                                       | No       | `{}`              |
| `secondaryButton` | `object` | Object containing the label, onClick handler, and optional styles for the secondary button.                                                       | No       | `null`            |
| `secondaryButton.label` | `string` | The text to display on the secondary button.                                                                                                      | Yes      | N/A               |
| `secondaryButton.onClick` | `func`   | The function to call when the secondary button is clicked.                                                                                        | Yes      | N/A               |
| `secondaryButton.style` | `object` | Custom styles for the secondary button, passed as an object of CSS properties.                                                                     | No       | `{}`              |
| `style`           | `object` | Custom styles for the modal, passed as an object of CSS properties.                                                                               | No       | `{}`              |

## Example

```jsx
<Modal
  isOpen={true}
  title="Delete Confirmation"
  text="Are you sure you want to delete this item?"
  onClose={() => console.log('Modal closed')}
  primaryButton={{
    label: 'Confirm',
    onClick: () => console.log('Item deleted!'),
  }}
  secondaryButton={{
    label: 'Cancel',
    onClick: () => console.log('Action cancelled'),
  }}
  style={{
    backgroundColor: 'white',
    color: 'black',
    padding: '20px',
    borderRadius: '10px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.2)',
  }}
/>
```

## Key Features

- **Customizable**: Easily adjust colors, text, and styles via the `style` prop.
- **Keyboard Support**: Close the modal by pressing the `Escape` key.
- **Flexible**: Define actions for primary and secondary buttons.
- **Responsive**: Adjusts well to different screen sizes.
- **User-friendly**: Closes on clicking outside the modal.

## Contribution

Feel free to contribute to this project! You can find the repository on GitHub:

[GitHub Repo](https://github.com/AurelieDuynslaeger/modal-component-demo--ocrfinalproject-npm)

The Demo is [here](https://modal-component-demo.vercel.app/).

If you encounter any issues or have suggestions, please submit an issue or a pull request. We value your feedback!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
