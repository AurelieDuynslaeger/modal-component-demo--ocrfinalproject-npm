
# Modal Component

A customizable and reusable modal component for React applications. Perfect for confirming actions like employee deletion or any other action requiring user confirmation.


## Installation

To install the modal component, you need to have React and ReactDOM installed in your project. If they aren't already, you can install them via npm:

```bash
npm install react react-dom
```

Then, you can install the `modal-component` via npm:

```bash
npm install modal-component
```

Or, if you use Yarn:

```bash
yarn add modal-component
```

## Usage

Here's a basic example of how to use the `Modal` component in your project:

```jsx
import React, { useState } from 'react';
import Modal from 'modal-component';

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
                primaryButton={{ label: 'Delete', onClick: primaryAction }}
                secondaryButton={{ label: 'Cancel', onClick: secondaryAction }}
                backgroundColor="#f9f9f9"
                textColor="#333"
                buttonStyle={{
                    primary: { backgroundColor: 'red', color: 'white' },
                    secondary: { backgroundColor: 'gray', color: 'white' },
                }}
                borderRadius="8px"
                padding="30px"
                boxShadow="0 4px 12px rgba(0,0,0,0.2)"
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
| `primaryButton`   | `object` | Object containing the label and onClick handler for the primary button.                                                                           | No       | `null`            |
| `secondaryButton` | `object` | Object containing the label and onClick handler for the secondary button.                                                                         | No       | `null`            |
| `backgroundColor` | `string` | Background color of the modal.                                                                                                                   | No       | `white`           |
| `textColor`       | `string` | Text color of the modal.                                                                                                                         | No       | `black`           |
| `buttonStyle`     | `object` | Custom styles to apply to the primary and secondary buttons.                                                                                     | No       | `{}`              |
| `borderRadius`    | `string` | Border radius of the modal container.                                                                                                            | No       | `4px`             |
| `padding`         | `string` | Padding inside the modal.                                                                                                                        | No       | `20px`            |
| `boxShadow`       | `string` | Box shadow applied to the modal for a slight elevation effect.                                                                                    | No       | `0 2px 10px rgba(0,0,0,0.1)` |

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
    backgroundColor="white"
    textColor="black"
    buttonStyle={{
        primary: { backgroundColor: 'red', color: 'white' },
        secondary: { backgroundColor: 'gray', color: 'white' },
    }}
    borderRadius="10px"
    padding="20px"
    boxShadow="0 4px 12px rgba(0,0,0,0.2)"
/>
```

## Key Features

- **Customizable**: Easily adjust colors, text, and styles.
- **Keyboard Support**: Close the modal by pressing the `Escape` key.
- **Flexible**: Define actions for primary and secondary buttons.
- **Responsive**: Adjusts well to different screen sizes.

## Contribution

Contributions are welcome! If you find any bugs or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

