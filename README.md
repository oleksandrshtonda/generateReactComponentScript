# This script was created to create React components faster!
<br>

## Example how it creates a component
Name of our future component is Header. It creates these files:
  ```
Header (dir):
    - Header.scss
    - Header.tsx
    - index.ts
```

  ### These files contain <br>
  Header.scss:
  ```
.header {

}
```

Header.tsx:
```
import './Header.scss';

interface Props {}

export const Header: React.FC<Props> = () => {
  return (<div className="header"></div>);
}

```

index.ts:
```
export * from './Header.tsx
```

## How to use it?
1. Create `utils` folder in root of your project: `/utils`
2. Create in this folder `generateComponent.js` and put the code in this one file
3. Go to `package.json` and add to scripts this command: `"createComponent": "node utils/generateComponent.js"`
4. Go to terminal and run the command: `npm run createComponent -- src/path/to/folder/NameOfComponent` <br>
   Example: `npm run createComponent -- src/components/Header`
5. Check your files and keep developing your awesome React app :)
