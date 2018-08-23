-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 23. Aug, 2018 23:13 PM
-- Server-versjon: 10.1.31-MariaDB
-- PHP Version: 7.2.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `techwizzle`
--

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `cards`
--

CREATE TABLE `cards` (
  `id` int(11) NOT NULL,
  `title` varchar(50) NOT NULL,
  `short_title` varchar(32) NOT NULL,
  `release_date` date DEFAULT NULL,
  `price` int(11) NOT NULL,
  `amazon_link` varchar(1000) DEFAULT NULL,
  `image` varchar(32) DEFAULT NULL,
  `external_image` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `cards`
--

INSERT INTO `cards` (`id`, `title`, `short_title`, `release_date`, `price`, `amazon_link`, `image`, `external_image`) VALUES
(1, 'MSI GAMING GeForce GTX 1060 6GB', 'MSI GTX 1060 6GB', '2016-07-19', 330, 'https://amzn.to/2OWGG4z', 'gtx1060.png', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01IEKYD5U&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(2, 'ASUS GeForce GTX 1070 8GB ROG STRIX OC Edition', 'ASUS GTX 1070 STRIX OC', '2016-06-10', 499, 'https://amzn.to/2N9a7zO', 'gtx1070.jpg', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01HDUVJ1I&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(3, 'Gigabyte GeForce GTX 1080 G1 Gaming 8G', 'Gigabyte GTX 1080 G1', '2016-06-10', 499, 'https://amzn.to/2N7lWXs', 'gtx1080.png', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01GJEE9BG&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(4, 'EVGA GeForce GTX 1060 SC GAMING 6GB', 'EVGA GTX 1060 SC 6GB', '2016-07-19', 279, 'https://amzn.to/2N4fMqW', 'evga1060.jpg', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01IPVSLTC&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(5, 'MSI GAMING GeForce GTX 1060 3GB', 'MSI GTX 1060 3GB', '2016-08-08', 279, 'https://amzn.to/2wkWyq1', 'gtx1060.png', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01KIJ7XQG&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(6, 'MSI GAMING GeForce GTX 1050 2GB 2GT OC', 'MSI GTX 1050 2GT OC 2GB', '2016-10-25', 145, 'https://amzn.to/2nYqEvx', 'msigtx1050.jpg', '//ws-na.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=US&ASIN=B01MFB3SGY&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=techwizzle-20'),
(7, 'Nvidia GEFORCE RTX 2080 TI Founders Edition', 'GEFORCE RTX 2080 TI FE', NULL, 1199, '', 'grtx2080.png', ''),
(8, 'Nvidia GEFORCE RTX 2080 Founders Edition', 'GEFORCE RTX 2080 FE', '2018-09-20', 799, '', 'grtx2080.png', ''),
(9, 'Nvidia GEFORCE RTX 2070 Founders Edition', 'GEFORCE RTX 2070 FE', NULL, 599, '', 'grtx2080.png', '');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `card_technical_info`
--

CREATE TABLE `card_technical_info` (
  `id` int(11) NOT NULL,
  `card_id` int(11) NOT NULL,
  `cuda_cores` varchar(32) DEFAULT NULL,
  `base_clock` varchar(32) DEFAULT NULL,
  `boost_clock` varchar(32) DEFAULT NULL,
  `standard_memory_config` varchar(32) DEFAULT NULL,
  `memory_clock_speed` varchar(32) DEFAULT NULL,
  `memory_interface_width` varchar(32) DEFAULT NULL,
  `memory_bandwidth` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `card_technical_info`
--

INSERT INTO `card_technical_info` (`id`, `card_id`, `cuda_cores`, `base_clock`, `boost_clock`, `standard_memory_config`, `memory_clock_speed`, `memory_interface_width`, `memory_bandwidth`) VALUES
(1, 1, '1280', '1506 MHz', '1708 MHz', '6 GB GDDR5', '8008 MHz', '192-bit', '192'),
(2, 2, '1920', '1657 MHz', '1860 MHz', '8 GB GDDR5', '8008 MHz', '256-bit', '256'),
(3, 3, '2560', '1721 MHz', '1860 MHz', '8 GB GDDR5X', '10010 MHz', '256 bit', '256'),
(4, 4, '1280', '1607 MHz', '1835 MHz', '6 GB GDDR5 SDRAM', '8008 MHz', '192-bit', '192'),
(5, 5, '1152', '1594 MHz', '1809 MHz', '3 GB GDDR5 SDRAM', '8008 MHz', '192-bit', '192'),
(6, 6, '640', '1404 MHz', '1518 MHz', '2 GB GDDR5 SDRAM', '7008 GHz', '128-bit', '128'),
(7, 7, '2944', '1515 MHz', '1800 MHz (OC)', '8 GB GDDR6', NULL, '256-bit', '448 GB/s');

-- --------------------------------------------------------

--
-- Tabellstruktur for tabell `games`
--

CREATE TABLE `games` (
  `id` int(32) NOT NULL,
  `card_id` int(11) NOT NULL,
  `title` varchar(32) NOT NULL,
  `resolution` varchar(32) NOT NULL,
  `settings` varchar(32) NOT NULL,
  `fps` int(4) NOT NULL,
  `image` varchar(32) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `games`
--

INSERT INTO `games` (`id`, `card_id`, `title`, `resolution`, `settings`, `fps`, `image`) VALUES
(1, 1, 'Grand Theft Auto V', '1080p', 'Max', 76, 'gtav.png'),
(2, 1, 'Battlefield 1', '1080p', 'Ultra', 87, 'bf1.png'),
(3, 1, 'Counter-strike GO', '1080p', 'Max', 182, 'csgo.png'),
(4, 2, 'Grand Theft Auto V', '1080p', 'Max', 84, 'gtav.png'),
(5, 2, 'Battlefield 1', '1080p', 'Max', 105, 'bf1.png'),
(6, 2, 'Counter-strike GO', '1080p', 'Max', 211, 'csgo.png'),
(7, 3, 'Grand Theft Auto V', '1080p', 'Max', 98, 'gtav.png'),
(8, 3, 'Battlefield 1', '1080p', 'Ultra', 115, 'bf1.png'),
(9, 3, 'Counter-strike GO', '1080p', 'Max', 243, 'csgo.png'),
(10, 4, 'Grand Theft Auto V', '1080p', 'Max', 74, 'gtav.png'),
(11, 4, 'Battlefield 1', '1080p', 'Ultra', 85, 'bf1.png'),
(12, 4, 'Counter-strike GO', '1080p', 'Max', 177, 'csgo.png'),
(13, 1, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 60, 'twwh.png'),
(14, 1, 'Rise of the Tomb Raider', '1080p', 'Max', 79, 'rotr.png'),
(15, 1, 'Battlefield V', '1080p', 'Max', 57, 'bf5.png'),
(16, 4, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 57, 'twwh.png'),
(17, 4, 'Rise of the Tomb Raider', '1080p', 'Max', 77, 'rotr.png'),
(18, 4, 'Battlefield V', '1080p', 'Max', 55, 'bf5.png'),
(19, 2, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 81, 'twwh.png'),
(20, 2, 'Rise of the Tomb Raider', '1080p', 'Max', 97, 'rotr.png'),
(21, 2, 'Battlefield V', '1080p', 'Max', 73, 'bf5.png'),
(22, 3, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 95, 'twwh.png'),
(23, 3, 'Rise of the Tomb Raider', '1080p', 'Max', 120, 'rotr.png'),
(24, 3, 'Battlefield V', '1080p', 'Max', 86, 'bf5.png'),
(25, 5, 'Grand Theft Auto V', '1080p', 'Max', 70, 'gtav.png'),
(26, 5, 'Battlefield 1', '1080p', 'Ultra', 81, 'bf1.png'),
(29, 5, 'Counter-strike GO', '1080p', 'Max', 174, 'csgo.png'),
(30, 5, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 52, 'twwh.png'),
(31, 5, 'Rise of the Tomb Raider', '1080p', 'Max', 73, 'rotr.png'),
(32, 5, 'Battlefield V', '1080p', 'Max', 52, 'bf5.png'),
(33, 6, 'Grand Theft Auto V', '1080p', 'Max', 61, 'gtav.png'),
(34, 6, 'Battlefield 1', '1080p', 'Ultra', 62, 'bf1.png'),
(35, 6, 'Counter-strike GO', '1080p', 'Max', 144, 'csgo.png'),
(36, 6, 'The Witcher 3: Wild Hunt', '1080p', 'Max', 35, 'twwh.png'),
(37, 6, 'Rise of the Tomb Raider', '1080p', 'Max', 41, 'rotr.png'),
(38, 6, 'Battlefield V', '1080p', 'Max', 43, 'bf5.png');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cards`
--
ALTER TABLE `cards`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `card_technical_info`
--
ALTER TABLE `card_technical_info`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `games`
--
ALTER TABLE `games`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cards`
--
ALTER TABLE `cards`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT for table `card_technical_info`
--
ALTER TABLE `card_technical_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
