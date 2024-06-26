# Создание круглых углов

[Главная](./../../README.md)

[CSS Tricks](./../README.md)

Для создания круглых углов у блока в большинстве случаев достаточно задать какое-то большое значение свойству `border-radius`, например `9999px`, но есть другое, более изящное решение:

```CSS
  .box {
    border-radius: 100vmax; /* vmax выбирает наибольшее из двух значений длины и ширины */
  }
```

Данное решение работает хорошо во всех случаев, кроме того, когда блок превосходит в размерах viewport.

Для обхода этого ограничения можно использовать относительно новое значение CSS констант - `Infinity`:

```CSS
    .box {
    border-radius: calc(Infinity * 1px);
  }
```

[Доступность](https://caniuse.com/mdn-css_types_calc-constant_infinity) константы около 92%

Для запуска демонстрационного примера понадобится стартовать сервер, например это может быть расширение для VSCode - _Live Server_
