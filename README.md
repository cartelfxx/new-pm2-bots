<p align="center">
  <h1 align="center">Discord Bot Paketi — Satılık</h1>
  <p align="center">
    <img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black" />
    <img src="https://img.shields.io/badge/Node.js-339933?style=flat&logo=node.js&logoColor=white" />
    <img src="https://img.shields.io/badge/MongoDB-47A248?style=flat&logo=mongodb&logoColor=white" />
    <img src="https://img.shields.io/badge/Discord.js-5865F2?style=flat&logo=discord&logoColor=white" />
    <img src="https://img.shields.io/badge/PM2-2B037A?style=flat&logo=pm2&logoColor=white" />
  </p>
</p>

---

Uzun süredir geliştirdiğim ve aktif olarak kullandığım bot paketini satışa çıkarıyorum. Sistem eksiksiz çalışır durumda teslim edilir.

**İletişim → Discord:** `cartelfx`

---

## Nedir?

5 ayrı bot process'inden oluşan, PM2 üzerinde çalışan bir Discord sunucu yönetim sistemi. Moderasyon'dan ekonomiye, güvenlikten istatistiğe kadar bir sunucunun ihtiyaç duyabileceği her şey tek pakette.

---

## Bot Yapısı

| Bot | Sorumluluk |
|-----|-----------|
| **Moderator** | Kayıt, ceza, yetkili yönetimi, paneller, moderasyon komutları |
| **Countery** | Sunucu kurulumu, bot yönetimi, senkronizasyon araçları |
| **Point** | İstatistik, sıralama, görev sistemi, level sistemi |
| **Guardian** | Anti-raid, sunucu koruma, whitelist, denetim |
| **Invite** | Davet takibi ve istatistikleri |

---

## Öne Çıkan Sistemler

**Moderasyon & Yönetim**
- Kayıt sistemi (isim, cinsiyet, yaş kontrolü)
- Ceza sistemi — mute, ban, jail, warn, slave, underworld
- Ceza itiraz paneli — üye itiraz eder, yönetim onaylar, kabul edilirse otomatik kaldırılır
- Yetkili yönetimi — terfi, tenzil, blok, geçmiş
- Sicil komutu — tüm ceza geçmişi sayfalı panel ile

**Görev & Puan Sistemi**
- Rol bazlı görev atama (ses, mesaj, kayıt, davet, taglı, yetkili çekme)
- AI destekli görev zorluk hesaplama
- Görev tamamlama takibi ve otomatik ödül
- Yetkili puan sistemi — günlük, haftalık, toplam

**İstatistik & Analiz**
- Ses, mesaj, yayın, kamera istatistikleri
- Haftalık/aylık/tüm zamanlar filtreleme
- Yetkili analiz raporu — trend göstergesi, AI bulgular
- İki yetkili karşılaştırma paneli
- Level sistemi — mesaj XP ve ses XP ayrı ayrı

**Senkronizasyon Araçları**
- Yetki senkronizasyon — rolü olan ama DB kaydı olmayan üyeleri tespit et ve düzelt
- Tutarsızlık tarama — 4 kategoride sistem sağlık kontrolü, tek tıkla toplu düzeltme
- İstatistik aktarma — bir üyenin tüm verisini başka bir üyeye taşı

**Paneller**
- Sorun çözme merkezi — sıra sistemi, özel oda, değerlendirme
- Terapi sistemi — terapist çağırma, seans yönetimi, değerlendirme
- Loca özel oda — altın ile kiralama, süre uzatma, üye yönetimi
- Özel oda sistemi — ücretsiz, sahiplik devri, kilitleme
- Kamera rolü, streamer başvuru, şüpheli hesap kontrolü, ceza itiraz

**Guardian — Sunucu Koruma**
- Anti-raid, anti-spam, kanal/rol yedekleme
- Whitelist sistemi
- Denetim paneli ve ceza yönetimi

**Kurulum & Yönetim**
- Setup paneli — tüm ayarlar tek yerden, rol/kanal seçici
- Log kurulumu — 35+ log kanalı otomatik oluşturma
- Emoji kurulumu — sistem emojileri otomatik yükleme
- Rooter yönetimi, yasaklı tag, özel komutlar

---

## Teknik Detaylar

- **Discord.js v14** — Components V2, Container, Section, Thumbnail
- **MongoDB + Mongoose** — Tüm veriler kalıcı
- **PM2** — Process yönetimi, otomatik restart, log dosyaları
- **Node.js v22**
- Tüm arayüzler modern Container/Section tabanlı, embed kullanılmıyor

---

## Kurulum Gereksinimleri

<details>
<summary>Gerekli yazılımları görmek için tıklayın</summary>

<br>

- [Visual C++ Redistributable](https://aka.ms/vs/17/release/vc_redist.x64.exe)
- [MongoDB 7.0](https://fastdl.mongodb.org/windows/mongodb-windows-x86_64-7.0.0-signed.msi)
- [MongoDB Database Tools](https://fastdl.mongodb.org/tools/db/mongodb-database-tools-windows-x86_64-100.9.0.msi)
- [Node.js v22](https://nodejs.org/dist/v22.17.0/node-v22.17.0-x64.msi)
- [FFmpeg](https://www.gyan.dev/ffmpeg/builds/ffmpeg-release-essentials.7z)

</details>

---

## Ekran Görüntüleri

### Kurulum & Ayarlar

| Setup Paneli | Ayarlar | Log Kurulumu |
|:---:|:---:|:---:|
| ![](images/setup.png) | ![](images/setup2.png) | ![](images/setup3.png) |

| Emoji Kurulumu | Sistem Yönetimi | Rooter |
|:---:|:---:|:---:|
| ![](images/setup4.png) | ![](images/setup5.png) | ![](images/rooter.png) |

| Yasaklı Tag | Özel Komut | Özel Komut 2 |
|:---:|:---:|:---:|
| ![](images/yasaktag.png) | ![](images/ozelkomut1.png) | ![](images/ozelkomut2.png) |

---

### Bot Yönetimi

| Bot Paneli | Bot Düzenleme |
|:---:|:---:|
| ![](images/botyonetim.png) | ![](images/botyonetim2.png) |

---

### Görev Sistemi

| Görev Paneli | Görev Detay |
|:---:|:---:|
| ![](images/task.png) | ![](images/task2.png) |

---

### Sorun Çözme Merkezi

| Panel | Talep | Uzman |
|:---:|:---:|:---:|
| ![](images/sorun.png) | ![](images/sorun2.png) | ![](images/sorun3.png) |

| Oturum | Değerlendirme | Geçmiş |
|:---:|:---:|:---:|
| ![](images/sorun4.png) | ![](images/sorun5.png) | ![](images/sorun6.png) |

| İhlal Raporu |
|:---:|
| ![](images/sorun7.png) |

---

### Ceza İtiraz Sistemi

| İtiraz Paneli | İtiraz Detay |
|:---:|:---:|
| ![](images/itiraz.png) | ![](images/itiraz2.png) |

---

### İstatistik Aktarma Sistemi(all)

| Ana Panel | Önizleme |
|:---:|:---:|
| ![](images/stataktar.png) | ![](images/stataktar-onizleme.png) |

---

| Sicil | Cezalar | Ceza Detay |
|:---:|:---:|:---:|
| ![](images/sicil.png) | ![](images/sicil2.png) | ![](images/sicil3.png) |

### Loca Özel Oda

| Loca Paneli | Loca Yönetim |
|:---:|:---:|
| ![](images/loca.png) | ![](images/loca2.png) |

---

### Yetki & Senkronizasyon

| Yetki Senkronizasyon | Yetki Sistemi | Tutarsızlık Tarama |
|:---:|:---:|:---:|
| ![](images/ysenk.png) | ![](images/yetkisys.png) | ![](images/tutarsizlik.png) |

---

### Guardian — Sunucu Koruma

| Ana Panel | Ayarlar |
|:---:|:---:|
| ![](images/guard.png) | ![](images/guard-ayarlar.png) |

| Ceza Sistemi | Denetim | Whitelist |
|:---:|:---:|:---:|
| ![](images/guard-cezalar.png) | ![](images/guard-denetim.png) | ![](images/guard-wl.png) |

---

### Güvenlik

| Şüpheli Hesap Kontrolü |
|:---:|
| ![](images/susp.png) |

---

## İletişim

**Discord:** `cartelfx`
