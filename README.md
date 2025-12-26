# pure-react-vite

## Запуск

```bash
npm install
npm run dev
```

Открой адрес из консоли (обычно `http://localhost:5173`).

## Что исправлено по сравнению с "pure react" через babel-standalone

- Можно использовать `import/export` и JSX без ошибок `require is not defined`.
- Компоненты разнесены по файлам: `App`, `Posts`, `Post`.
- `removePost(id)` удаляет запись из состояния через `setState(prev => ...)`.
