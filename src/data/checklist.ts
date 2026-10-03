/**
 * Taşınma kontrol listesi. `day` taşınma gününe göre gündür:
 * -28 dört hafta önce, 0 taşınma günü, 7 bir hafta sonra.
 */
export type ChecklistTask = { id: string; day: number; text: string }

export const checklistGroups: { title: string; tasks: ChecklistTask[] }[] = [
  {
    title: '4 hafta önce',
    tasks: [
      { id: 'tarih', day: -28, text: 'Taşınma tarihini netleştirin; ay başı, ay sonu ve hafta sonu en yoğun günlerdir.' },
      { id: 'kesif', day: -28, text: 'Nakliyat firmasından ücretsiz keşif isteyin ve fiyatı yazılı alın.' },
      { id: 'ayikla', day: -26, text: 'Kullanmadığınız eşyaları ayırın; satılacak, bağışlanacak ve atılacakları belirleyin.' },
      { id: 'kira', day: -25, text: 'Kiracıysanız ev sahibine çıkış tarihini yazılı bildirin, depozito teslimini konuşun.' },
    ],
  },
  {
    title: '2-3 hafta önce',
    tasks: [
      { id: 'sozlesme', day: -21, text: 'Nakliyat sözleşmesini imzalayın; fiyat, tarih, eşya listesi ve sigorta yazılı olsun.' },
      { id: 'site', day: -18, text: 'İki adresin site veya apartman yönetimine taşınma gününü bildirin; asansör ve park yeri için izin alın.' },
      { id: 'okul', day: -16, text: 'Çocukların okul nakil işlemlerini başlatın.' },
      { id: 'internet', day: -14, text: 'İnternet aboneliğinin nakil başvurusunu yapın; kurulum için yeni adrese randevu alın.' },
    ],
  },
  {
    title: '1 hafta önce',
    tasks: [
      { id: 'abonelik', day: -7, text: 'Doğalgaz (Başkentgaz), su (ASKİ) ve elektrik aboneliklerinin kapatma ve yeni adreste açma başvurularını yapın.' },
      { id: 'kitap', day: -6, text: 'Az kullanılan eşyaları, kitapları ve mevsimlik kıyafetleri kolilemeye başlayın (koliler firmadan gelir).' },
      { id: 'degerli', day: -5, text: 'Takı, nakit, tapu ve kimlik gibi değerli evrakı ayrı bir çantaya ayırın; araca koymayın.' },
      { id: 'ilac', day: -4, text: 'İlk iki gün lazım olacakları (ilaç, şarj aleti, havlu, bir takım kıyafet) ayrı çantaya koyun.' },
    ],
  },
  {
    title: 'Son gün',
    tasks: [
      { id: 'buzdolabi', day: -1, text: 'Buzdolabını boşaltıp fişten çekin, kapağını açık bırakın; çamaşır makinesinin suyunu boşaltın.' },
      { id: 'fotograf', day: -1, text: 'Televizyon ve bilgisayar kablolarının bağlı hâlinin fotoğrafını çekin.' },
      { id: 'sayac', day: -1, text: 'Sayaçların fotoğrafını çekin, endeks değerlerini not edin.' },
    ],
  },
  {
    title: 'Taşınma günü',
    tasks: [
      { id: 'liste', day: 0, text: 'Eşya listesini ekiple birlikte kontrol edin; yüklemeden önce imzalayın.' },
      { id: 'son-kontrol', day: 0, text: 'Boşalan evde dolap içleri, balkon ve depoyu son kez kontrol edin.' },
      { id: 'teslim', day: 0, text: 'Yeni adreste eşyayı aynı liste üzerinden teslim alın; hasar varsa tutanağa yazdırın.' },
    ],
  },
  {
    title: 'Taşındıktan sonra',
    tasks: [
      { id: 'adres', day: 3, text: 'e-Devlet üzerinden veya nüfus müdürlüğünde adres değişikliğini bildirin (taşınmadan sonra 20 iş günü içinde).' },
      { id: 'banka', day: 5, text: 'Banka, işyeri, sigorta ve kargo adreslerinizi güncelleyin.' },
      { id: 'arac', day: 7, text: 'Aracınız varsa ruhsattaki adresi güncelletin.' },
    ],
  },
]
