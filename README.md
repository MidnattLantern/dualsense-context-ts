# dualsense-context-ts
TS files to be imported to the Contexts file

- The files are build for TypeScript (TSX) React projects in mind, mapped for the DualSense controller.
- The context use the vanilla controller library, which does not support analogue triggers, touchpad, nor adaptive triggers.
- Behaviour may differ across browsers, Safari and Chrome have been tested and verified.

1. Download and import `DualSenseInputContext.tsx` and `useDualSenseInputContext.tsx` to your Contexts folder,
2. Wrap the provider around the lowest level, such as `index.tsx` or `main.tsx`.
```tsx
import { DualSenseInputProvider } from './Contexts/DualSenseInputContext.tsx'; // adjust the directory accordingly
```
```tsx
    <DualSenseInputProvider>
      <App />
    </DualSenseInputProvider>
```
3. Import to any component:
```tsx
import { useDualSenseInputContext } from '../Contexts/useDualSenseInputContext'; // adjust the directory accordingly
```
4. following can be imported, they return either a float value, a boolean state or a string.
```tsx
  const {
    leftStickX, // float
    leftStickY, // flost
    L3, // boolean
    rightStickX, // float
    rightStickY, // float
    R3, // boolean
    share, // boolean
    options, // boolean
    logoHome, // boolean
    square, // boolean
    cross, // boolean
    circle, // boolean
    triangle, // boolean
    directionLeft, // boolean
    directionDown, // boolean
    directionRight, // boolean
    directionUp, // boolean
    L1, // boolean
    R1, // boolean
    L2, // boolean
    R2, // boolean

    // etc (optional)
    controllerConntected, // boolean
    controllerID, // string
    verified // boolean
  } = useDualSenseInputContext();
```