
# Events and State
## Basic Button Alert
Gör en knapp som visar en alert-ruta när du klickar på den.
I rutan ska det stå "Never use alert()".

## Counter
Skapa en knapp som varje gång du klickar på den så ökar en räknare.
Räknaren ska sedan ritas ut i din template.

## Counter 2.0
Lägg till en annan knapp som räknar ner, lägg även till att man inte kan räkna under noll.

## Input Duplication
Skapa ett textfält som när du skriver i det ska samma text visas i en paragraf bredvid.

## Dice Roller
Skapa ett textfält som när du skriver in en siffra på tangentbordet ska textfältet tömmas och ett tal mellan 0 och den siffran slumpas och ritas ut i din template. Visa bara siffran i din template.

## Form Submit Prevention
Skapa ett enkelt formulär med en knapp och något textfält.
Hindra formuläret att skickas och anropa istället en metod på komponenten när man trycker på knappen.

Lägg även till att man kan trycka på enter när markören är ett av textfälten för att skicka formuläret.

# Conditional & List Rendering

## Toggle Switch
Skapa en knapp som växlar mellan texten "on" eller "off" när du klickar på den

## Fruits
Lägg till en array med frukter i din data och rita ut den som en ul.

## Shröedingers FrontEnd-utvecklare
Visa en bild på en trälåda.
Lägg till en knapp som när man trycker på den så öppnas lådan och visar antingen en FrontEnd-utvecklare eller en BackEnd-utvecklare.

## Tabular View
Skapa tre knappar som växlar mellan tre olika vyer. Låt varje vy vara en egen section med lite lorem-text i, men endast en section ska vara synlig åt gången.

## Faked Login Form
Hårdkoda ett användarnamn och lösenord och skapa ett loginformulär.

Om man skriver in rätt så visas en hemlig vy, annars visas ett felmeddelande.

## Modal
Lägg till en knapp som när den klickas på visas en modal ovanpå sidan, i modalen ska en annan knapp finnas som stänger rutan.

Lägg även till ett fade layer som tonar ner bakgrunden och när man klickar på den så ska rutan också stängas.


## Fruit List
Skapa en array av frukter och rita ut dem som list items i en `<ul>`

## Fruit Salad

### Steg 1
Skapa två arrayer, en fylld med minst 5 frukter, den andra tom.
Rita ut de två arrayerna i två separata listor.
När man klickar på en frukt så ska frukten kopieras in i den tomma arrayen.
Den från början tomma arrayen får fyllas med hur många
kopior av frukter som helst.

### Steg 2
Istället för att kopiera över frukter så ska du nu flytta frukter.
D.v.s. tar du päron från frukt-arrayen ska päron “flyttas” till nya.

### Steg 3
Kopiera in frukter i ny tom array, dock ska det istället för flera päron
ska det stå antal, ex. har du klickat på päron 3 ggr på frukt-arrayen ska
det i nya stå “3 st päron”.

<details>
<summary>Hint!</summary>

Du kanske måste göra om datastrukturen?
</details>


# Shakespeare Insult Generator
Nedanför har du 10 förolämpningar från olika pjäser att använda dig av. Skapa ett objekt för varje förolämpning som har två egenskaper. Den första som heter insult som innehåller en sträng med förolämpningen och den andra som heter play med pjäsen namn. Lägg sedan alla objekt i en array och slumpa en förolämpning. Det ska finnas en knapp där man kan slumpa en ny förolämpning.

Extra utmaning: Ta bort varje slumpad förolämpning från arrayen och återställ arrayen när alla förolämpningar är visade.

Tips på typsnitt: [MedievalSharp](https://fonts.google.com/specimen/MedievalSharp) eller
[IM Fell English SC](https://fonts.google.com/specimen/IM+Fell+English+SC)
```

Were such things here as we do speak about? Or have we eaten on the insane root That takes the reason prisoner? - Macbeth

Never hung poison on a fouler toad - Richard III

He thinks too much: such men are dangerous. - Julius Ceasar

Thou calledst me a dog before thou hadst a cause. But since I am a dog, beware my fangs. - The Merchant of Venice

Give me your hand...I can tell your fortune. You are a fool. - The Two Noble Kinsmen

He smells like a fish, a very ancient and fish-like smell, a kind of not-of-the-newest poor-John. A strange fish! - The Tempest

It is a tale Told by an idiot, full of sound and fury, Signifying nothing. - Macbeth

Alas, poor heart, that kiss is comfortless As frozen water to a starved snake. - Titus Andronicus

He hath eaten me out of house and home; he hath put all substance into that fat belly of his. - Henry IV, Part 2

Out, you green-sickness carrion! Out, you baggage! You tallow-face! - Romeo and Juliet
```

# Components and Props

## Basic Layout Components
Låt App.vue vara rot-komponenten som mountar en `<Header />`-, `<Main />`-, `<Navigation />`- , `<Aside />`- och en `<Footer />`-komponent. Placera dessa i ett grid.

Låt `<Header />`-komponenten ta emot en prop `title` som den ritar ut.

Låt `<Navigation />`-komponenten ta emot en en prop `links` med en lista av objekt med information om länkarna som den sedan ritar ut.

## Component Portfolio
Utgå från Tab Views-övningen från conditional-rendering-bootcampet.
Istället för att toggla mellan olika vyer, ta 4-5st tidigare övningar och placera i egna komponenter som du togglar mellan istället.

## Product Cards
Skapa två komponenter som ritar ut ett rutnät av produktkort utifrån följande data.
En ProductList som tar emot arrayen med produkter som en prop,
En ProductCard som tar emot ett produktobjekt som prop.

Bonus: Gör att varje kort blir klickbart och får en highlight.

```js
products: [
  {
    productId: 1000,
    productName: 'delightful chocolate Ilise',
    productImage: 'https://picsum.photos/400?image=659',
    productStock: 81,
    productPrice: '23488.67',
    productSalePrice: '23488.67',
    rating: 4
  },
  {
    productId: 1009,
    productName: 'indirect indigo Fiona',
    productImage: 'https://picsum.photos/400?image=583',
    productStock: 49,
    productPrice: '40702.21',
    productSalePrice: '4477.24',
    rating: 1
  },
  {
    productId: 1035,
    productName: 'complicated maroon Esmaria',
    productImage: 'https://picsum.photos/400?image=648',
    productStock: 69,
    productPrice: '3128.23',
    productSalePrice: '938.47',
    rating: 4
  },
  {
    productId: 1046,
    productName: 'voiceless emerald Sarita',
    productImage: 'https://picsum.photos/400?image=695',
    productStock: 48,
    productPrice: '21625.98',
    productSalePrice: '8001.61',
    rating: 3
  },
  {
    productId: 1047,
    productName: 'old lime Elvera',
    productImage: 'https://picsum.photos/400?image=761',
    productStock: 4,
    productPrice: '30869.36',
    productSalePrice: '30869.36',
    rating: 5
  },
  {
    productId: 1051,
    productName: 'unfortunate tan Maris',
    productImage: 'https://picsum.photos/400?image=622',
    productStock: 63,
    productPrice: '39042.14',
    productSalePrice: '11322.22',
    rating: 2
  },
  {
    productId: 1063,
    productName: 'lovely brown Theressa',
    productImage: 'https://picsum.photos/400?image=891',
    productStock: 31,
    productPrice: '40426.73',
    productSalePrice: '12936.55',
    rating: 4
  },
  {
    productId: 1068,
    productName: 'primary gold Tera',
    productImage: 'https://picsum.photos/400?image=463',
    productStock: 88,
    productPrice: '25121.63',
    productSalePrice: '25121.63',
    rating: 4
  }
]
```

## Faked Preloader
Skapa en komponent som visar en preloader och efter 2 sekunder visar "Success!"


## Modal
Gör om Modal-uppgiften så att modalen är en komponent och togglas med en prop.

# Component Life Cycle

## Cookie Consent
Skapa djävulens påfund till galenskap som är en popup där man får godkänna eller avböja cookies.

Om man godkänner ska en nyckel i localStorage sparas att man har godkänt.

Om man refreshar sidan och man tidigare har godkänt så ska komponent inte visas.

## Login Persistance (Faked Login Form)
Gå tillbaka till Faked Login-form övningen och lägg till att man håller sig inloggad även om man laddar om sidan (localStorage).

## Random User Card
Skapa en komponent som tar emot ett objekt med användardata. Använd data från https://randomuser.me. Om komponenten inte får ett objekt så ska en preloader visas.
Mounta komponenten i App.vue som också hämtar data slumpad data från https://randomuser.me och skickar datan till komponenten genom en prop.

## Toast
Skapa en toast-komponent som visar ett meddelande och sen försvinner efter ett antal sekunder. Typ av meddelandet ska kunna konfigureras med en prop

### Meddelandetyper
* Success, grön bakgrund
* Warning, gul bakgrund
* Info,    vit bakgrund
* Error,   röd bakgrund