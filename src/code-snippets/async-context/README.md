# Асинхронный контекст

[Все сниппеты](../README.md)

Создание асинхронного контекста может применяться для выполнения асинхронных операций (использования ключевого слова await) в глобальной области видимости.

Создание такого контекста сводится к оборачиванию произвольного кода конструкцией следующего вида:

```JS
  +(async () => {
    // your async code is here
  });
```

Для запуска демонстрационного примера понадобится стартовать сервер, например это может быть расширение для VSCode - _Live Server_
