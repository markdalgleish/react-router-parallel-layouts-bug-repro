# react-router-parallel-layouts-bug-repro

```
cd react-router-parallel-layouts
npm i
npm run dev
```

1. Navigate to "Hello"
2. Refresh page
3. Navigate to "World"
4. See 404, route doesn't match

For comparison, you can see the same app working in Remix:

```
cd remix-parallel-layouts
npm i
npm run dev
```

1. Navigate to "Hello"
2. Refresh page
3. Navigate to "World"
4. It works
