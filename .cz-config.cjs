module.exports = {
  types: [
    { value: "feat", name: "feat:     Новый функционал, новый api" },
    { value: "fix", name: "fix:      Баг фикс, не трогающий api" },
    { value: "review", name: "review:   Доработки по замечаниям на ревью" },
    { value: "chore", name: "demo:     Доработки демо страницы" },
    { value: "docs", name: "docs:     Документация" },
    {
      value: "style",
      name: "style:    Изменения, не модифицирующие код,\n            код-стайл, форматирование, линтинг",
    },
    {
      value: "refactor",
      name: "refactor: Рефакторинг, не связанный с codestyle",
    },
    {
      value: "perf",
      name: "perf:     Улучшение производительности",
    },
    { value: "test", name: "test:     Доработка тестов" },
    {
      value: "chore",
      name: "chore:    Изменения, связанные со сборкой,\n            генерация документации и прочее",
    },
    { value: "revert", name: "revert:   Реверт коммита" },
    { value: "update", name: "update:   Обновление зависимостей" },
  ],

  scopeOverrides: {
    chore: [
      { name: "ci" },
      { name: "build" },
      { name: "demo" },
      { name: "devtools" },
    ],
    docs: [{ name: "readme" }, { name: "jsdoc" }, { name: "документация" }],
  },

  // override the messages, defaults are as follows
  messages: {
    type: "Выберите вид вносимого изменения:",
    scope: "\nОпределите SCOPE этого изменения:",
    //ticketNumber: "Введите номер задачи в виде [A-Z]{1,10}-\\d{1,6}",
    ticketNumber: "Введите номер задачи (только цифры, максимум 6 цифр)",
    // used if allowCustomScopes is true
    customScope: "Введите SCOPE изменения:",
    subject: "Напишите КРАТКОЕ, ИМПЕРАТИВНОЕ описание изменения:\n",
    body: 'Опишите ПОДРОБНОЕ описания изменения (необязательно). Вставьте "|" для перехода на новую строка:\n',
    breaking: "Список BREAKING CHANGES (необязательно):\n",
    footer:
      "Список ЗАКРЫТЫХ ЗАДАЧ (указать, если их несколько). Т.е.: GBO-31, GBO-34:\n",
    confirmCommit: "Все выше указанное заполнено верно?",
  },

  allowBreakingChanges: ["feat"],
  subjectLimit: 100,
  footerPrefix: "Задачи:",
};
