# Teste Back-end

Esta API permite coletar dados das paginas da Amazon e Mercado Livre.


## 🚀 Começando

extraia o projeto em um diretório de sua preferencia;

abra com seu editor de texto de sua preferência;


### 📋 Pré-requisitos

Insomnia;


## Configurando o Insomnia

 -> Instale o insomnia em sua máquina.


# Configurando requisição para criação de usuário

 -> Crie uma nova requisição e selecione o método HTTP GET.

 -> insira a url -> "htto://localhost:3000/".

 -> selecione a aba query e preencha conforme exemplo abaixo:

      -> Amazon

    Name --------------- Value

    links -------------- https://www.amazon.com/dp/B073X8N1YW/

    links -------------- https://www.amazon.com/dp/B08CD34NZH/

    links -------------- https://www.amazon.com/dp/B07RF1XD36/

    links -------------- https://www.amazon.com/dp/B081V6W99V/

    links -------------- https://www.amazon.com/dp/B08FPL6S4Y/

    titleRequest ------- //*[@id="productTitle"]

    descriptionRequest - //*[@id="productDescription"]/p

    priceRequest ------- //*[@id="price_inside_buybox"]

    imageRequest ------- .a-spacing-small.item.imageThumbnail.a-declarative

      -> Mercado Livre

    Name --------------- Value

    links -------------- https://www.mercadolivre.com.br/xiaomi-mi-smart-band-5-11-caixa-de-plastico-pc-pulseira-black-de-elastmero-termoplastico-e-liga-de-aluminio-xmsh10hm/p/MLB15963018#reco_item_pos=1&reco_backend=machinalis-pdp-domains&reco_backend_type=low_level&reco_client=pdp-other-domain&reco_id=307113d5-c608-485e-996a-848abbc0c8b9

    links -------------- https://www.mercadolivre.com.br/cadeira-de-escritorio-trevalla-tl-cde-26-1-preta-con-estofado-do-mesh/p/MLB13382441#reco_item_pos=2&reco_backend=promotions-sorted-by-score-mlb-A&reco_backend_type=low_level&reco_client=home_seller-promotions-recommendations&reco_id=74fbcc38-8077-4daa-a4d5-d0e3248e949a&c_id=/home/promotions-recommendations/element&c_element_order=3&c_uid=4d62bf30-c5ac-4bc8-83c1-466b2477179e

    links -------------- https://www.mercadolivre.com.br/sony-playstation-4-slim-1tb-marvels-spider-manhorizon-zero-dawn-complete-editionratchet-clank-cor-preto/p/MLB16261616?pdp_filters=category:MLB11172#searchVariation=MLB16261616&position=1&type=product&tracking_id=1e4bac2b-7744-42bf-ad45-ab654e430bc0

    links -------------- https://www.mercadolivre.com.br/microsoft-xbox-series-s-512gb-cor-branco/p/MLB16650345?pdp_filters=category:MLB11172#searchVariation=MLB16650345&position=1&type=product&tracking_id=02287454-fd30-40ef-8317-2c68d8b629db

    links -------------- https://www.mercadolivre.com.br/microsoft-xbox-360-kinect-slim-4gb-standard-cor-matte-black/p/MLB6305107?pdp_filters=category:MLB11172#searchVariation=MLB6305107&position=7&type=product&tracking_id=9d2afc03-b72c-4cf3-8b8f-2b11cd33dbee

    titleRequest ------- //*[@id="root-app"]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[1]/div[1]/div[2]/h1

    descriptionRequest - //*[@id="root-app"]/div[2]/div[2]/div[1]/div[1]/div[4]/div/div/p

    priceRequest ------- //*[@id="root-app"]/div[2]/div[2]/div[1]/div[1]/div[1]/div[2]/div[3]/div[1]/div/span[1]/span[2]

    imageRequest ------- .ui-pdp-thumbnail.ui-pdp-gallery__thumbnail


## 🛠️ Construído com

* NodeJS

* Typescript

* puppeteer

* express

* sentry


## ✒️ Autores

Halex Penha Ramos - [desenvolvedor](https://github.com/HalexRamos)

## 🎁 Expressões de gratidão

* Conte a outras pessoas sobre este projeto 📢
* Obrigado publicamente 🤓.
* etc.


---
⌨️ com ❤️ por Halex Penha Ramos 😊
