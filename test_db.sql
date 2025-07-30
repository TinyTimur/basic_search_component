-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1:3306
-- Время создания: Июл 30 2025 г., 13:46
-- Версия сервера: 8.0.30
-- Версия PHP: 8.1.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `test_db`
--

-- --------------------------------------------------------

--
-- Структура таблицы `offers`
--

CREATE TABLE `offers` (
  `id` int NOT NULL,
  `mark` varchar(255) NOT NULL,
  `model` varchar(255) NOT NULL,
  `supplier_id` int NOT NULL,
  `reg_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `offers`
--

INSERT INTO `offers` (`id`, `mark`, `model`, `supplier_id`, `reg_date`) VALUES
(1, '1234', '1234', 1, '2025-07-16 01:32:00'),
(2, '1234', '1234', 1, '2025-07-16 02:32:00'),
(3, '1234', '1234', 3, '2025-07-16 03:32:00'),
(4, '1234', '1234', 2, '2025-07-16 04:32:00'),
(5, '1234', '1234', 2, '2025-07-16 05:32:00'),
(6, '1234', '1234', 1, '2025-07-16 06:32:00'),
(7, '1234', '1234', 1, '2025-07-16 07:32:00'),
(8, '1234', '1234', 4, '2025-07-16 08:32:00'),
(9, '1234', '1234', 1, '2025-07-16 09:32:00'),
(10, '1234', '1234', 1, '2025-07-16 10:32:00'),
(11, '1234', '1234', 5, '2025-07-16 11:32:00'),
(12, '1234', '1234', 5, '2025-07-16 12:32:00'),
(13, '1234', '1234', 1, '2025-07-16 13:32:00'),
(14, '1234', '1234', 2, '2025-07-16 14:32:00'),
(15, '1234', '1234', 1, '2025-07-16 15:32:00');

-- --------------------------------------------------------

--
-- Структура таблицы `suppliers`
--

CREATE TABLE `suppliers` (
  `id` int NOT NULL,
  `name` varchar(255) NOT NULL,
  `reg_date` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Дамп данных таблицы `suppliers`
--

INSERT INTO `suppliers` (`id`, `name`, `reg_date`) VALUES
(1, 'AutoDealer1', '2025-07-16 09:32:00'),
(2, 'AutoDealer2', '2025-07-16 10:32:00'),
(3, 'AutoDealer3', '2025-07-16 11:32:00'),
(4, 'AutoDealer4', '2025-07-16 12:32:00'),
(5, 'AutoDealer5', '2025-07-16 13:32:00');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_supplier` (`supplier_id`);

--
-- Индексы таблицы `suppliers`
--
ALTER TABLE `suppliers`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `offers`
--
ALTER TABLE `offers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- AUTO_INCREMENT для таблицы `suppliers`
--
ALTER TABLE `suppliers`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `fk_supplier` FOREIGN KEY (`supplier_id`) REFERENCES `suppliers` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
