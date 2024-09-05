// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>,
) {
  res.status(200).json(products);
}

const products = {
  "products": [
    {
      "name": "Wireless Headphones",
      "description": "Headphones sem fio de alta qualidade com cancelamento de ruído e bateria de longa duração.",
      "price": 99.99,
      "url": "https://example.com/products/wireless-headphones",
      "img": "https://example.com/images/wireless-headphones.jpg"
    },
    {
      "name": "Smart Watch",
      "description": "Relógio inteligente com rastreamento de atividades, monitor de frequência cardíaca e mostradores personalizáveis.",
      "price": 149.99,
      "url": "https://example.com/products/smart-watch",
      "img": "https://example.com/images/smart-watch.jpg"
    },
    {
      "name": "Bluetooth Speaker",
      "description": "Caixa de som portátil com som rico, design à prova d'água e 12 horas de reprodução.",
      "price": 59.99,
      "url": "https://example.com/products/bluetooth-speaker",
      "img": "https://example.com/images/bluetooth-speaker.jpg"
    },
    {
      "name": "E-reader",
      "description": "Leitor digital leve com tela de alta resolução e iluminação ajustável.",
      "price": 129.99,
      "url": "https://example.com/products/e-reader",
      "img": "https://example.com/images/e-reader.jpg"
    },
    {
      "name": "Gaming Mouse",
      "description": "Mouse ergonômico com configurações de DPI personalizáveis, iluminação RGB e botões programáveis.",
      "price": 49.99,
      "url": "https://example.com/products/gaming-mouse",
      "img": "https://example.com/images/gaming-mouse.jpg"
    },
    {
      "name": "Smartphone",
      "description": "Smartphone de última geração com câmera de alta resolução e tela OLED.",
      "price": 799.99,
      "url": "https://example.com/products/smartphone",
      "img": "https://example.com/images/smartphone.jpg"
    },
    {
      "name": "4K Monitor",
      "description": "Monitor 4K com cores vibrantes e bordas finas para melhor experiência visual.",
      "price": 399.99,
      "url": "https://example.com/products/4k-monitor",
      "img": "https://example.com/images/4k-monitor.jpg"
    },
    {
      "name": "Mechanical Keyboard",
      "description": "Teclado mecânico com switches customizáveis e iluminação RGB.",
      "price": 89.99,
      "url": "https://example.com/products/mechanical-keyboard",
      "img": "https://example.com/images/mechanical-keyboard.jpg"
    },
    {
      "name": "Laptop Stand",
      "description": "Suporte ajustável para notebook com design ergonômico.",
      "price": 29.99,
      "url": "https://example.com/products/laptop-stand",
      "img": "https://example.com/images/laptop-stand.jpg"
    },
    {
      "name": "Portable Charger",
      "description": "Carregador portátil de alta capacidade para recarga rápida de dispositivos.",
      "price": 39.99,
      "url": "https://example.com/products/portable-charger",
      "img": "https://example.com/images/portable-charger.jpg"
    },
    {
      "name": "Action Camera",
      "description": "Câmera de ação resistente à água com gravação em 4K.",
      "price": 199.99,
      "url": "https://example.com/products/action-camera",
      "img": "https://example.com/images/action-camera.jpg"
    },
    {
      "name": "Smart Thermostat",
      "description": "Termostato inteligente com controle remoto via app e monitoramento de energia.",
      "price": 119.99,
      "url": "https://example.com/products/smart-thermostat",
      "img": "https://example.com/images/smart-thermostat.jpg"
    },
    {
      "name": "Fitness Tracker",
      "description": "Pulseira fitness com monitoramento de atividades físicas e sono.",
      "price": 49.99,
      "url": "https://example.com/products/fitness-tracker",
      "img": "https://example.com/images/fitness-tracker.jpg"
    },
    {
      "name": "Robot Vacuum",
      "description": "Aspirador robô com mapeamento inteligente e controle por aplicativo.",
      "price": 249.99,
      "url": "https://example.com/products/robot-vacuum",
      "img": "https://example.com/images/robot-vacuum.jpg"
    },
    {
      "name": "Noise Cancelling Earbuds",
      "description": "Fones intra-auriculares com cancelamento de ruído ativo e som premium.",
      "price": 79.99,
      "url": "https://example.com/products/noise-cancelling-earbuds",
      "img": "https://example.com/images/noise-cancelling-earbuds.jpg"
    },
    {
      "name": "VR Headset",
      "description": "Headset de realidade virtual com controle de movimento e resolução 4K.",
      "price": 299.99,
      "url": "https://example.com/products/vr-headset",
      "img": "https://example.com/images/vr-headset.jpg"
    },
    {
      "name": "Electric Scooter",
      "description": "Patinete elétrico dobrável com bateria de longa duração e velocidade de até 25 km/h.",
      "price": 499.99,
      "url": "https://example.com/products/electric-scooter",
      "img": "https://example.com/images/electric-scooter.jpg"
    },
    {
      "name": "Drone with Camera",
      "description": "Drone com câmera 4K e sistema de estabilização para fotos e vídeos.",
      "price": 599.99,
      "url": "https://example.com/products/drone-camera",
      "img": "https://example.com/images/drone-camera.jpg"
    },
    {
      "name": "Smart Light Bulbs",
      "description": "Lâmpadas inteligentes controladas por app com ajuste de cor e intensidade.",
      "price": 29.99,
      "url": "https://example.com/products/smart-light-bulbs",
      "img": "https://example.com/images/smart-light-bulbs.jpg"
    },
    {
      "name": "Portable Projector",
      "description": "Projetor portátil com suporte a Full HD e conexão sem fio.",
      "price": 269.99,
      "url": "https://example.com/products/portable-projector",
      "img": "https://example.com/images/portable-projector.jpg"
    },
    {
      "name": "Wireless Charger",
      "description": "Carregador sem fio rápido com design compacto e indicador LED.",
      "price": 19.99,
      "url": "https://example.com/products/wireless-charger",
      "img": "https://example.com/images/wireless-charger.jpg"
    },
    {
      "name": "Smart Doorbell",
      "description": "Campainha inteligente com vídeo HD, detecção de movimento e intercomunicador.",
      "price": 149.99,
      "url": "https://example.com/products/smart-doorbell",
      "img": "https://example.com/images/smart-doorbell.jpg"
    },
    {
      "name": "Portable SSD",
      "description": "SSD portátil de 1TB com alta velocidade de transferência e design resistente.",
      "price": 159.99,
      "url": "https://example.com/products/portable-ssd",
      "img": "https://example.com/images/portable-ssd.jpg"
    },
    {
      "name": "Gaming Chair",
      "description": "Cadeira gamer ergonômica com ajuste de altura, apoio lombar e encosto reclinável.",
      "price": 219.99,
      "url": "https://example.com/products/gaming-chair",
      "img": "https://example.com/images/gaming-chair.jpg"
    },
    {
      "name": "Electric Toothbrush",
      "description": "Escova de dentes elétrica com temporizador inteligente e várias velocidades de limpeza.",
      "price": 69.99,
      "url": "https://example.com/products/electric-toothbrush",
      "img": "https://example.com/images/electric-toothbrush.jpg"
    },
    {
      "name": "Smart Coffee Maker",
      "description": "Cafeteira inteligente com temporizador e controle por aplicativo.",
      "price": 99.99,
      "url": "https://example.com/products/smart-coffee-maker",
      "img": "https://example.com/images/smart-coffee-maker.jpg"
    },
    {
      "name": "Laptop Sleeve",
      "description": "Capa protetora para notebook com material resistente à água e design elegante.",
      "price": 24.99,
      "url": "https://example.com/products/laptop-sleeve",
      "img": "https://example.com/images/laptop-sleeve.jpg"
    },
    {
      "name": "Noise-Cancelling Microphone",
      "description": "Microfone com cancelamento de ruído para gravações e streaming de alta qualidade.",
      "price": 89.99,
      "url": "https://example.com/products/noise-cancelling-microphone",
      "img": "https://example.com/images/noise-cancelling-microphone.jpg"
    },
    {
      "name": "Smart Air Purifier",
      "description": "Purificador de ar inteligente com filtros HEPA e controle por aplicativo.",
      "price": 179.99,
      "url": "https://example.com/products/smart-air-purifier",
      "img": "https://example.com/images/smart-air-purifier.jpg"
    },
    {
      "name": "USB-C Hub",
      "description": "Hub USB-C multifuncional com portas HDMI, USB 3.0 e leitor de cartões.",
      "price": 49.99,
      "url": "https://example.com/products/usb-c-hub",
      "img": "https://example.com/images/usb-c-hub.jpg"
    }
  ]
}
