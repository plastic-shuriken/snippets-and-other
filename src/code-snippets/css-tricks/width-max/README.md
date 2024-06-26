# Название сниппета

[Главная](./../../../README.md)
[Каталог Code Snippets](../README.md)

В данном примере показано как функция _max_ при расчете ширины может заменить пару свойств _width_ и _min-width_.

Например, при стилизации блока таким образом, чтобы он занимал некоторую ширину, но не меньшую определенного значения применялись следующие свойства:

```CSS

  .old-approach {
    width: 50%; /* ширина не больше половины ширины родительского блока */
    min-width: 500px; /* ширина не меньше 500 пикселей, сработает если ширина родительского блока менее 1000px */
  }

```

Современный подход предполагает использования функции _max_:

```CSS

  /*
  max(500px, 50%) - тут:
  500px - то же, что и min-width: 500px;
  50% - то же, что и width: 50%;
  */
  .new {
    width: max(500px, 50%);
  }


```

Поддержка функции [max](https://caniuse.com/css-math-functions) браузерами.

Просмотреть код можно в браузере. Для запуска демонстрационного примера может понадобиться стартовать сервер, например это может быть _Live Server_ (в VSCode) или подобный.
