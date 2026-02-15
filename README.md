# Исторические даты

Интерактивный блок с временными отрезками и ключевыми событиями. Тестовое задание на позицию Middle Frontend Developer

## Стек технологий

- **React 19** + **TypeScript**
- **SCSS** — стилизация
- **Webpack 5** — сборка
- **Swiper** — слайдер событий
- **GSAP** — анимация чисел и вращение круговой навигации

## Установка и запуск

### Требования

- Node.js >= 18
- npm >= 9

### Установка зависимостей

```bash
npm install
```

### Запуск в режиме разработки

```bash
npm start
```

Приложение откроется на [http://localhost:3000](http://localhost:3000)

### Сборка для продакшена

```bash
npm run build
```

Собранный проект будет в папке `dist/`

## Структура проекта

```
src/
├── index.html                          # HTML-шаблон
├── index.tsx                           # Точка входа
├── App.tsx                             # Корневой компонент
├── types/
│   └── index.ts                        # Типы данных
├── data/
│   └── periods.ts                      # Данные временных отрезков
├── styles/
│   ├── global.scss                     # Глобальные стили
│   ├── _variables.scss                 # Переменные SCSS
│   └── _mixins.scss                    # Миксины SCSS
└── components/
    ├── HistoricalDates/                # Главный блок
    │   ├── HistoricalDates.tsx
    │   └── HistoricalDates.scss
    ├── CircleNavigation/               # Круговая навигация с точками
    │   ├── CircleNavigation.tsx
    │   └── CircleNavigation.scss
    ├── YearsDisplay/                   # Анимированные годы
    │   ├── YearsDisplay.tsx
    │   └── YearsDisplay.scss
    ├── EventsSlider/                   # Swiper-слайдер событий
    │   ├── EventsSlider.tsx
    │   └── EventsSlider.scss
    ├── NavigationControls/             # Кнопки пред/след + счётчик
    │   ├── NavigationControls.tsx
    │   └── NavigationControls.scss
    └── MobilePagination/               # Точечная пагинация (мобильная)
        ├── MobilePagination.tsx
        └── MobilePagination.scss
```

## Особенности реализации

- **Независимый компонент** — блок можно использовать несколько раз на одной странице без конфликтов
- **Адаптивная вёрстка** — базовый макет (1440px), десктоп (<=1024px), мобильный (<=768px)
- **Анимация чисел** — плавный переход между значениями годов через GSAP
- **Круговая навигация** — точки равномерно распределены по окружности, вращение анимировано через GSAP
- **Поддержка от 2 до 6 временных отрезков** — точки автоматически перерассчитываются