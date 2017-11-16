
This package contains the React-Native-specific logic for Slate. It's separated further into a series of directories:

- [**Components**](./src/components) — containing the React Native components for rendering Slate editors.
- [**Constants**](./src/constants) — containing a few private constants modules.
- [**Plugins**](./src/plugins) — containing the React-Native-specific plugins for Slate editors.
- [**Utils**](./src/utils) — containing a few private convenience modules.

Feel free to poke around in each of them to learn more!

### Problems

[ ] RN `TextInput` `onKeyPress` needs to get implemented on Android. See https://github.com/facebook/react-native/pull/14720.
[ ] RN `TextInput` `onKeyPress` for iOS gets called twice for each key press - once with the key, and
  then immediately afterwards with the auto-correct suggestion (full word).
[ ] `findClosestNode`, `isInEditor`, etc., do not work at all in RN. Replacing all of these types of
calls might be pretty effort-intensive, depending on if there's an easy way to do node lookup across
depths in React Native similar to in web.
[ ] `event.preventDefault()` is not applicable for RN. Aside from trivially removing everywhere, a
logical replacement will somehow need to do the same type of "preventing" that this does on web...
However, many (all?) of the `TextInput` events on RN are one-way communication events from native to
RN, so this might be quite difficult...
[ ] `getNode` calls in core slate files fail on React Native.
