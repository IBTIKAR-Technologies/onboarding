# IBTIKAR[\*](https://ibtikar-tech.com/) Code Conventions

**Ibtikar** is a company that specializes in development using the MERN stack, which includes MongoDB, Express, React, and Node.js, as well as React-Native for mobile development. When working with these technologies, it's essential to follow consistent code conventions for better code readability and maintainability.

## Variable and Function Naming

It is recommended to use **camel case** for naming variables and functions. Camel case is a convention where the first word is in lowercase, and subsequent words are capitalized. For instance:

- `firstName`
- `lastName`
- `getUserName`
- `calculateTotal`

Using camel case helps in distinguishing words in the name and makes it easier to read and understand the purpose of the variable or function.

## Descriptive Names

Choose **descriptive names** for your variables and functions. A well-chosen name should clearly convey the purpose or role of the item. This practice enhances the comprehensibility of your code. For example, instead of using generic names like "data" or "value," opt for names that specify the content or usage, such as "userData" or "calculateTotalPrice."

## Avoid Abbreviations

Minimize the use of **abbreviations** in your code. While abbreviations can save typing time, they often make the code less intuitive. Prioritize readability and opt for full, descriptive words. For instance, use "maximumValue" instead of "maxVal."

## Plural Names for Collections and no special characters

When naming collections or arrays, it's a good practice to use **plural names** to indicate that they contain multiple items. This makes it clear that the variable represents a collection. For example:

- `users` (for an array of user objects)
- `products` (for a list of product data)

Consistent plural naming can also help to maintain a clear and organized code structure.

## All lowercase in collection names

When naming collections or arrays, it's a good practice to use **lowercase names** to indicate that they contain multiple items. This makes it clear that the variable represents a collection. For example:

- `users` (for an array of user objects)
- `products` (for a list of product data)
- `usersCollection` bad naming
- `users_collection` bad naming
- `Users` bad naming

## ALL UPPERCASE in constants

When naming constants, it's a good practice to use **uppercase names** to indicate that they are constants. This makes it clear that the variable represents a constant. For example:

- `MAX_VALUE` (for an array of user objects)
- `MIN_VALUE` (for a list of product data)

## All database variables should be camelCase

When naming database variables, it's a good practice to use **camelCase names** to indicate that they are database variables. This makes it clear that the variable represents a database variable. For example:

- `firstName` (for an array of user objects)
- `lastName` (for a list of product data)

## Database variables covensions:

- Ending with At: for date and time variables (e.g. createdAt, updatedAt)
- Ending with Id: for id variables (e.g. userId, productId)
- Ending with Ids: for array of ids (e.g. userIds, productIds)

# Teck Stack

## Web

- React/Next.js
- Next Auth
- Typescript
- MongoDB
- TailwindCSS
- Zustand (If needed)

## Mobile

- React-Native (CLI)
- Typescript
- Zustand (If needed)
- React-Navigation
- React-paper (for UI and theming)

## Backend

- Next.js api routes
- Node.js
- Typescript
- MongoDB
- Express.js

## Recommened VSCode Extensions

- Prettier [Search for esbenp.prettier-vscode on Google](https://www.google.com/search?q=esbenp.prettier-vscode)
- ESLint [Search for dbaeumer.vscode-eslint on Google](https://www.google.com/search?q=dbaeumer.vscode-eslint)
- Tailwind CSS IntelliSense [Search for bradlc.vscode-tailwindcss on Google](https://www.google.com/search?q=bradlc.vscode-tailwindcss)
- I18n Ally [Search for lokalise.i18n-ally on Google](https://www.google.com/search?q=lokalise.i18n-ally)

# Libraries (recommended)

## Web

- Axios
- React-Query
- React-Hook-Form
- yup
- react-table
- zustand (If needed)

## Mobile

- Axios
- React navigation
- React paper (for UI and theming)
- zustand (If needed)

## React best practices

- Use functional components
- Use hooks:

  ```
      // useMemo

      // instead of
      const value = props.a + props.b;

      // use
      const value = useMemo(() => props.a + props.b, [props.a, props.b]);

      //useCallback

      //instead of
      const handleSomething = () => {

      // do something

      }

      //use
      const handleSomething = useCallback(() => {

      // do something

      }, []);
  ```

- Component should be as small as possible
- Minimize the use of useState:

  ```
      //instead of
      const [value, setValue] = useState(0);

      //use if no need for rerendering
      const value = useRef(0);

      //instead of
      const [value, setValue] = useState(0);
      const [otherValue, setOtherValue] = useState(0);
      const [thirdValue, setThirdValue] = useState(0);

      //use especially if you have many states
      const [state, setState] = useState({
          value: 0,
          otherValue: 0,
          thirdValue: 0
      });
  ```

- Use typescript for all props(for reusability):

  ```
      //instead of
      const Component = (props) => {

      // do something

      }

      //use
      interface Props {
          a: number;
          b: number;
      }

      const Component = (props: Props) => {

      // do something

      }
  ```

Adhering to these code conventions will not only make your codebase more organized but also facilitate collaboration among team members. It will also ease the process of maintaining and extending your code in the future.
