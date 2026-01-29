# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.



////////////////////////////////////////////////////////////////////
Alright, let’s do this **clean + complete**, from **basic → advanced**, with **real explanations** (not just definitions). Since you’re working with **React + MUI + routing**, I’ll also connect hooks to **real-world usage** you’ll face in projects like Notes apps, dashboards, etc.

---

# 🔗 React Hooks — Detailed Explanation (All Types)

Hooks let you **use state and other React features in functional components** (without class components).

---

## 1️⃣ `useState` – State Management (Most Basic)

### 👉 What it does

Allows you to store **data that changes** in a component.

### Syntax

```js
const [state, setState] = useState(initialValue);
```

### Example

```js
const [count, setCount] = useState(0);

<button onClick={() => setCount(count + 1)}>+</button>
```

### Key Points

* Re-renders component when state changes
* State updates are **asynchronous**
* Never mutate state directly ❌

### Real use cases

* Form inputs
* Toggle modals
* Notes title/message
* Auth state

---

## 2️⃣ `useEffect` – Side Effects

### 👉 What it does

Runs code **after render** (API calls, subscriptions, DOM updates).

### Syntax

```js
useEffect(() => {
  // side effect
}, [dependencies]);
```

### Types of `useEffect`

#### ✅ Runs on every render

```js
useEffect(() => {
  console.log("render");
});
```

#### ✅ Runs once (componentDidMount)

```js
useEffect(() => {
  fetchNotes();
}, []);
```

#### ✅ Runs when dependency changes

```js
useEffect(() => {
  filterNotes();
}, [searchText]);
```

#### ✅ Cleanup (componentWillUnmount)

```js
useEffect(() => {
  const timer = setInterval(() => {}, 1000);
  return () => clearInterval(timer);
}, []);
```

### Real use cases

* API calls
* Event listeners
* Timers
* Route-based updates

---

## 3️⃣ `useContext` – Global State (No Prop Drilling)

### 👉 What it does

Share data **across components** without passing props manually.

### Example

```js
const UserContext = createContext();

<UserContext.Provider value={user}>
  <App />
</UserContext.Provider>
```

```js
const user = useContext(UserContext);
```

### Real use cases

* Auth user
* Theme (dark/light)
* Language
* Global notes state

---

## 4️⃣ `useRef` – Reference Without Re-render

### 👉 What it does

Stores mutable values **without causing re-render**.

### Example (DOM access)

```js
const inputRef = useRef();

<input ref={inputRef} />
<button onClick={() => inputRef.current.focus()} />
```

### Example (store value)

```js
const prevCount = useRef(0);
```

### Real use cases

* Focus input
* Previous values
* Timers
* Scroll position

---

## 5️⃣ `useMemo` – Performance Optimization

### 👉 What it does

Memoizes **computed values** to avoid heavy recalculations.

### Syntax

```js
const result = useMemo(() => expensiveFn(data), [data]);
```

### Example

```js
const filteredNotes = useMemo(() => {
  return notes.filter(note => note.title.includes(search));
}, [notes, search]);
```

### When to use

* Heavy calculations
* Filtering large lists
* Prevent unnecessary recalculations

❌ Don’t use everywhere (over-optimization)

---

## 6️⃣ `useCallback` – Function Memoization

### 👉 What it does

Prevents function recreation on every render.

### Syntax

```js
const fn = useCallback(() => {}, [deps]);
```

### Example

```js
const handleDelete = useCallback((id) => {
  deleteNote(id);
}, []);
```

### Why needed?

Functions are **new objects** every render → causes child re-renders.

### Real use cases

* Passing functions to child components
* Optimizing lists

---

## 7️⃣ `useReducer` – Advanced State Logic

### 👉 What it does

Manages **complex state** (Redux-like pattern).

### Syntax

```js
const [state, dispatch] = useReducer(reducer, initialState);
```

### Example

```js
function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, action.payload];
    case "DELETE":
      return state.filter(n => n.id !== action.payload);
    default:
      return state;
  }
}
```

```js
dispatch({ type: "ADD", payload: note });
```

### Use when

* Multiple state transitions
* Complex logic
* Notes CRUD

---

## 8️⃣ `useLayoutEffect` – DOM Measurements

### 👉 What it does

Like `useEffect`, but runs **before paint**.

```js
useLayoutEffect(() => {
  measureHeight();
}, []);
```

### When to use

* DOM size calculations
* Animations
* Masonry layouts

⚠️ Can block UI → use carefully

---

## 9️⃣ `useImperativeHandle` – Control Child Methods

### 👉 What it does

Expose child functions to parent using `ref`.

### Example

```js
useImperativeHandle(ref, () => ({
  focusInput() {
    inputRef.current.focus();
  }
}));
```

### Rare use cases

* Custom inputs
* Modals
* Libraries

---

## 🔟 `useId` – Unique IDs (React 18)

```js
const id = useId();
```

### Use cases

* Accessibility
* Forms
* Labels & inputs

---

## 1️⃣1️⃣ `useTransition` – Smooth UI Updates

### 👉 What it does

Marks updates as **non-urgent**

```js
const [isPending, startTransition] = useTransition();

startTransition(() => {
  setFilteredData(data);
});
```

### Use cases

* Search filtering
* Large lists
* Avoid UI freeze

---

## 1️⃣2️⃣ `useDeferredValue` – Delay Expensive Updates

```js
const deferredSearch = useDeferredValue(search);
```

### Use cases

* Search input lag
* Large datasets

---

## 🧠 Summary Table

| Hook                | Purpose             |
| ------------------- | ------------------- |
| useState            | Local state         |
| useEffect           | Side effects        |
| useContext          | Global state        |
| useRef              | DOM / mutable value |
| useMemo             | Memoize values      |
| useCallback         | Memoize functions   |
| useReducer          | Complex state       |
| useLayoutEffect     | DOM sync            |
| useImperativeHandle | Control child       |
| useId               | Unique IDs          |
| useTransition       | Non-blocking UI     |
| useDeferredValue    | Delay updates       |

---

## 🎯 Which hooks YOU should master first

Since you’re building real apps:

1. `useState`
2. `useEffect`
3. `useContext`
4. `useRef`
5. `useCallback`
6. `useMemo`
7. `useReducer`

---

If you want:

* 🔥 **Hooks with real Notes App examples**
* 🔁 **Class lifecycle → Hooks mapping**
* ⚡ **When NOT to use hooks**
* 🧩 **Custom hooks creation**

Just tell me 👌
