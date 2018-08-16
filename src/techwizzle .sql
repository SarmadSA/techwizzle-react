-- phpMyAdmin SQL Dump
-- version 4.7.9
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: 16. Aug, 2018 17:53 PM
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
  `title` varchar(32) NOT NULL,
  `release_date` date DEFAULT NULL,
  `price` int(11) NOT NULL,
  `amazon_link` varchar(1000) DEFAULT NULL,
  `image` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `cards`
--

INSERT INTO `cards` (`id`, `title`, `release_date`, `price`, `amazon_link`, `image`) VALUES
(1, 'MSI GTX 1060', '2016-05-01', 400, 'https://www.amazon.com/MSI-GAMING-GTX-1060-6G/dp/B01IEKYD5U/ref=sr_1_3?ie=UTF8&qid=1530105701&sr=8-3&keywords=msi+gtx+1060', 'gtx1060.png'),
(2, 'Asus GTX 1070', '2016-05-06', 299, 'https://www.amazon.com/ASUS-GeForce-STRIX-Graphic-STRIX-GTX1070-O8G-GAMING/dp/B01HDUVJ1I/ref=sr_1_3?ie=UTF8&qid=1530397787&sr=8-3&keywords=asus+gtx+1070', 'gtx1070.jpg'),
(3, 'Gigabyte GTX 1080', '2016-08-12', 549, 'https://www.amazon.com/Gigabyte-GeForce-WINDFORCE-Cooling-Graphics/dp/B01GCAW1IA/ref=sr_1_fkmr2_4?s=electronics&ie=UTF8&qid=1530978937&sr=1-4-fkmr2&keywords=gigabyte+msi+gtx+1080', 'gtx1080.png'),
(4, 'EVGA GeForce GTX 1060 SC', '2016-06-07', 299, 'https://www.amazon.com/EVGA-GeForce-GAMING-Support-06G-P4-6163-KR/dp/B01IPVSLTC/ref=sr_1_1?s=pc&ie=UTF8&qid=1531568607&sr=1-1&keywords=gtx+1060', 'evga1060.jpg');

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
  `memory_speed` varchar(32) DEFAULT NULL,
  `memory_interface_width` varchar(32) DEFAULT NULL,
  `memory_bandwidth` varchar(32) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dataark for tabell `card_technical_info`
--

INSERT INTO `card_technical_info` (`id`, `card_id`, `cuda_cores`, `base_clock`, `boost_clock`, `standard_memory_config`, `memory_speed`, `memory_interface_width`, `memory_bandwidth`) VALUES
(1, 1, '1280', '1506', '1708', '6 GB GDDR5', '8 Gbps', '192-bit', '192');

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
(1, 1, 'Grand Theft Auto V', '1080p', 'Max', 70, 'gtav.png'),
(2, 1, 'Battlefield 1', '1080p', 'Ultra', 90, 'bf1.png'),
(3, 1, 'Counter-strike GO', '1080p', 'Max', 300, 'csgo.png'),
(4, 2, 'Grand Theft Auto V', '1080p', 'Max', 78, 'gtav.png'),
(5, 2, 'Battlefield 1', '1080p', 'Max', 100, 'bf1.png'),
(6, 2, 'Counter-strike GO', '1080p', 'Max', 350, 'csgo.png'),
(7, 3, 'Grand Theft Auto V', '1080p', 'Max', 98, 'gtav.png'),
(8, 3, 'Battlefield 1', '1440p', 'Ultra', 120, 'bf1.png'),
(9, 3, 'Counter-strike GO', '1440p', 'Max', 290, 'csgo.png'),
(10, 4, 'Grand Theft Auto V', '1080p', 'Max', 90, 'gtav.png'),
(11, 4, 'Battlefield 1', '1080p', 'Ultra', 78, 'bf1.png'),
(12, 4, 'Counter-strike GO', '1440p', 'Max', 290, 'csgo.png');

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
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `card_technical_info`
--
ALTER TABLE `card_technical_info`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `games`
--
ALTER TABLE `games`
  MODIFY `id` int(32) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
