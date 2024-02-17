# CSS переменные: calc

[Главная](./../../README.md)

[Каталог Code Snippets](../README.md)

CSS переменные позволяют производить вычисления значений свойств с помощью математических операторов таких как: `+`, `-`, `*`, `/`

Например:

```CSS

  /* свойства вычисляются в функции calc */
  .something {
    width: calc(100px + 24px);
    height: calc(50px + 25px * 4);
  }

  /* то же, что и выше, но свойства указаны непосредственно */
  .something {
    width: 124px;
    height: 150px;
  }
```

При вычислении, единицы измерения могут быть разными:

```CSS

  .spill-outside {
    margin-left: -16px;
    margin-right: -16px;
    width: calc(100% + 16px * 2);
  }

```

**Преобразование значения в `rem`.**

```CSS
  .heading {
    font-size: calc(24 / 16 * 1rem);
  }
```

Больше примеров можно посмотреть в коде.

Для запуска демонстрационного примера понадобится стартовать сервер, например это может быть расширение для VSCode - _Live Server_