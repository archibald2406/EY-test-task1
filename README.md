# EY test. Task 1
(Выполнено на Node js).

Для начала ввести в командной строке 'npm install' для установки всех необходимых модулей.

Для запуска программы ввести в командной строке 'node app.js' или просто 'node app'.

После запуска появляется меню:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/1.png)

1) (Задание 1) Генерация 100 текстовых файлов (в папку files) с указанной
в задании структурой, и заполнение их 100 000 строками.
(Если папки files нет, её необходимо создать вручную).
2) (Задание 2) Объединение всех файлов (из папки files) в один файл (в папку merged-files).
При выборе этой функции можно ввести строку, которая будет удалена из
всех файлов, а также не будет занесена в результирующий.
(Если папки merged-files нет, её необходимо создать вручную).
3) Выход из меню и завершение работы программы.

Выполнение задания 1:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/2.png)
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/3.png)

Пример сгенерированного файла:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/5.png)

Выполнение задания 2:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/4.png)

Сгенерированный объединённый файл:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/6.png)

Задание 3: Для выполнения вставки данных из файла в базу данных необходимо
прежде всего настроить файл 'config.js' для подключения к базе данных MySQL,
создать в базе данных таблицу с названием 'test_table' с помощью процедуры, указанной ниже,
а также в файле 'import-files-to-db.js' в функции 'execFileParsingAndImportToDB()'
указать передаваемое ей название файла из папки 'files' с указанием расширения файла.
После этого нужно запустить файл 'import-files-to-db.js', введя в командной
строке 'node путь-относительно-корня-проекта/import-files-to-db'.

Процедура для создания таблицы 'test_table':
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/9.png)

Выполнение задания 3:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/7.png)

Данные из файла, занесённые в базу данных (занёс лишь половину данных, так как
очень медленный ноутбук и на вставку всех данных ушло бы около 4 часов,
но функция работает нормально):
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/8.png)


Задание 4: Хранимая процедура в базе данных MySQL, которая считает сумму всех
целых чисел и медиану всех дробных чисел:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/10.png)

Результат работы хранимой процедуры:
![](https://github.com/archibald2406/EY-test-task1/blob/master/screenshots/11.png)
