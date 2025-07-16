// <stdin>
import React, { useState, useRef, useEffect } from "https://esm.sh/react@18.2.0";
import { Heart, MessageCircle, User, Play, Pause, Home, Bell, Menu, X, ShieldAlert, Volume2, VolumeX, Crown, Mail } from "https://esm.sh/lucide-react?deps=react@18.2.0,react-dom@18.2.0";
var TikTokApp = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("teste@gmail.com");
  const [loginError, setLoginError] = useState("");
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [likes, setLikes] = useState({});
  const [likedVideos, setLikedVideos] = useState({});
  const [showSidebar, setShowSidebar] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [showVipPopup, setShowVipPopup] = useState(false);
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState("");
  const [showGallery, setShowGallery] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const videoRefs = useRef([]);
  useEffect(() => {
    const cleanupInterval = setInterval(() => {
      if (videoRefs.current.length > 0) {
        videoRefs.current.forEach((video, index) => {
          if (video && Math.abs(index - currentVideoIndex) > 3) {
            video.preload = "none";
            video.src = "";
            video.load();
            video.src = videos[index]?.videoUrl || "";
          }
        });
      }
    }, 1e4);
    return () => clearInterval(cleanupInterval);
  }, [currentVideoIndex]);
  const videos = [
    {
      id: 101,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Andreininha.mp4",
      username: "Andreininha",
      displayName: "Andreininha",
      description: "Andreininha arrasando! \u{1F525} #viral #brasil #trending",
      avatar: "assets/andreininha_avatar.png?prompt=Beautiful%20young%20Brazilian%20woman%20with%20long%20dark%20hair%2C%20sweet%20smile%2C%20natural%20feminine%20beauty%2C%20warm%20brown%20eyes",
      likes: 2340,
      comments: 156
    },
    {
      id: 102,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Andreininha01.mp4",
      username: "Andreininha",
      displayName: "Andreininha",
      description: "Andreininha parte 2! \u2728 #amazing #content",
      avatar: "assets/andreininha_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20dark%20hair%2C%20sweet%20smile%2C%20natural%20beauty",
      likes: 1890,
      comments: 134
    },
    {
      id: 103,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Babisafadinha.mp4",
      username: "Babisafadinha",
      displayName: "Babi Safadinha",
      description: "Babi mandando muito bem! \u{1F4A5} #viral #trending",
      avatar: "assets/babi_avatar.png?prompt=Young%20Brazilian%20blonde%20woman%20with%20wavy%20hair%2C%20playful%20smile%2C%20confident%20feminine%20pose%2C%20bright%20blue%20eyes",
      likes: 3456,
      comments: 245
    },
    {
      id: 104,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/FabiolaDelfim.mp4",
      username: "FabiolaDelfim",
      displayName: "Fabiola Delfim",
      description: "Fabiola arrasando sempre! \u{1F31F} #content #amazing",
      avatar: "assets/fabiola_avatar.png?prompt=Elegant%20Brazilian%20woman%20with%20long%20straight%20hair%2C%20sophisticated%20feminine%20look%2C%20professional%20model%20photo%2C%20graceful%20features",
      likes: 2167,
      comments: 189
    },
    {
      id: 105,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/fany.mp4",
      username: "Fany",
      displayName: "Fany",
      description: "Fany com energia total! \u26A1 #viral #brasil",
      avatar: "assets/fany_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20curly%20hair%2C%20bright%20smile%2C%20energetic%20feminine%20vibe%2C%20radiant%20personality",
      likes: 1723,
      comments: 145
    },
    {
      id: 107,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Flaga%20na%20rua02.mp4",
      username: "FlagaNaRua",
      displayName: "Flaga na Rua",
      description: "Mais flagrantes incr\xEDveis! \u{1F525} #trending #viral",
      avatar: "assets/flaga_avatar.png?prompt=Beautiful%20Brazilian%20woman%20in%20street%20style%2C%20candid%20feminine%20moment%2C%20urban%20background%2C%20natural%20beauty",
      likes: 3890,
      comments: 289
    },
    {
      id: 108,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Gabriela.mp4",
      username: "Gabriela",
      displayName: "Gabriela",
      description: "Gabriela simplesmente incr\xEDvel! \u{1F496} #amazing #top",
      avatar: "assets/gabriela_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20wavy%20brown%20hair%2C%20natural%20feminine%20beauty%2C%20warm%20smile%2C%20soft%20features",
      likes: 2567,
      comments: 189
    },
    {
      id: 109,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/IsaGrey.mp4",
      username: "IsaGrey",
      displayName: "Isa Grey",
      description: "Isa Grey mandando ver! \u{1F31F} #content #viral",
      avatar: "assets/isagrey_avatar.png?prompt=Young%20Brazilian%20woman%20with%20grey%20hair%2C%20modern%20feminine%20style%2C%20confident%20expression%2C%20striking%20features",
      likes: 1945,
      comments: 156
    },
    {
      id: 110,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/jaqueline.mp4",
      username: "Jaqueline",
      displayName: "Jaqueline",
      description: "Jaqueline arrasando! \u{1F525} #viral #brasil",
      avatar: "assets/jaqueline_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20dark%20hair%2C%20elegant%20feminine%20style%2C%20graceful%20pose%2C%20sultry%20eyes",
      likes: 2123,
      comments: 167
    },
    {
      id: 111,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/jelma.mp4",
      username: "Jelma",
      displayName: "Jelma",
      description: "Jelma com conte\xFAdo incr\xEDvel! \u2728 #amazing #content",
      avatar: "assets/jelma_avatar.png?prompt=Young%20Brazilian%20woman%20with%20trendy%20feminine%20style%2C%20bright%20smile%2C%20modern%20beauty%2C%20confident%20pose",
      likes: 1789,
      comments: 134
    },
    {
      id: 112,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/live%20vasada02.mp4",
      username: "LiveVazada",
      displayName: "Live Vazada",
      description: "Live vazada incr\xEDvel! \u{1F4A5} #live #vazado #viral",
      avatar: "assets/live_avatar.png?prompt=Beautiful%20Brazilian%20woman%20live%20streaming%2C%20digital%20background%2C%20tech%20vibes%2C%20feminine%20streamer%20aesthetic",
      likes: 5234,
      comments: 456
    },
    {
      id: 113,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/live%20vasada03.mp4",
      username: "LiveVazada",
      displayName: "Live Vazada",
      description: "Mais live vazada! \u{1F31F} #exclusive #live",
      avatar: "assets/live_avatar.png?prompt=Live%20streaming%20setup%2C%20digital%20background%2C%20tech%20vibes",
      likes: 4321,
      comments: 387
    },
    {
      id: 114,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/live%20vasada1.mp4",
      username: "LiveVazada",
      displayName: "Live Vazada",
      description: "Live vazada exclusiva! \u{1F525} #trending #live",
      avatar: "assets/live_avatar.png?prompt=Live%20streaming%20setup%2C%20digital%20background%2C%20tech%20vibes",
      likes: 3987,
      comments: 298
    },
    {
      id: 115,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/lyCollins.mp4",
      username: "LyCollins",
      displayName: "Ly Collins",
      description: "Ly Collins arrasando! \u{1F4AB} #viral #trending",
      avatar: "assets/lycollins_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20hair%2C%20model%20features%2C%20professional%20feminine%20look%2C%20stunning%20beauty",
      likes: 2890,
      comments: 203
    },
    {
      id: 116,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Marianvgl.mp4",
      username: "Marianvgl",
      displayName: "Marian VGL",
      description: "Marian mandando muito bem! \u{1F525} #amazing #content",
      avatar: "assets/marian_avatar.png?prompt=Young%20Brazilian%20woman%20with%20modern%20feminine%20style%2C%20confident%20pose%2C%20beautiful%20features%2C%20trendy%20look",
      likes: 2456,
      comments: 178
    },
    {
      id: 117,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Mariasafadinha.mp4",
      username: "MariaSafadinha",
      displayName: "Maria Safadinha",
      description: "Maria Safadinha com tudo! \u{1F31F} #viral #brasil",
      avatar: "assets/mariasafadinha_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20playful%20smile%2C%20confident%20feminine%20attitude%2C%20seductive%20look%2C%20natural%20beauty",
      likes: 3234,
      comments: 245
    },
    {
      id: 118,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Priscila.mp4",
      username: "Priscila",
      displayName: "Priscila",
      description: "Priscila simplesmente incr\xEDvel! \u{1F496} #amazing #top",
      avatar: "assets/priscila_avatar.png?prompt=Elegant%20Brazilian%20woman%20with%20sophisticated%20feminine%20style%2C%20natural%20beauty%2C%20refined%20features%2C%20graceful%20pose",
      likes: 2123,
      comments: 167
    },
    {
      id: 119,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Saracinesasafada.mp4",
      username: "SaracineSafada",
      displayName: "Saracine Safada",
      description: "Saracine arrasando! \u{1F525} #viral #trending",
      avatar: "assets/saracine_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20hair%2C%20glamorous%20feminine%20style%2C%20sultry%20look%2C%20model%20beauty",
      likes: 2789,
      comments: 198
    },
    {
      id: 120,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Sarasafada2.mp4",
      username: "SaraSafada",
      displayName: "Sara Safada",
      description: "Sara Safada parte 2! \u2728 #content #amazing",
      avatar: "assets/sarasafada_avatar.png?prompt=Young%20Brazilian%20woman%20with%20trendy%20feminine%20style%2C%20confident%20look%2C%20playful%20beauty%2C%20modern%20girl",
      likes: 1834,
      comments: 123
    },
    {
      id: 121,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/Suzi.mp4",
      username: "Suzi",
      displayName: "Suzi",
      description: "Suzi mandando ver! \u{1F31F} #viral #brasil",
      avatar: "assets/suzi_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20curly%20hair%2C%20bright%20smile%2C%20natural%20feminine%20beauty%2C%20joyful%20expression",
      likes: 2345,
      comments: 189
    },
    {
      id: 122,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/TaldaLoira.mp4",
      username: "TaldaLoira",
      displayName: "Tal da Loira",
      description: "Tal da Loira arrasando! \u{1F4A5} #viral #trending",
      avatar: "assets/taldaloira_avatar.png?prompt=Blonde%20Brazilian%20woman%20with%20playful%20smile%2C%20modern%20feminine%20style%2C%20beautiful%20features%2C%20confident%20pose",
      likes: 3123,
      comments: 234
    },
    {
      id: 123,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/ThaissaFit.mp4",
      username: "ThaissaFit",
      displayName: "Thaissa Fit",
      description: "Thaissa Fit com energia! \u26A1 #fitness #viral",
      avatar: "assets/thaissafit_avatar.png?prompt=Athletic%20Brazilian%20woman%20in%20fitness%20gear%2C%20healthy%20lifestyle%2C%20feminine%20strength%2C%20fit%20beauty",
      likes: 2567,
      comments: 198
    },
    {
      id: 124,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/ThaissaFit01.mp4",
      username: "ThaissaFit",
      displayName: "Thaissa Fit",
      description: "Thaissa Fit parte 2! \u{1F525} #workout #amazing",
      avatar: "assets/thaissafit_avatar.png?prompt=Athletic%20Brazilian%20woman%20in%20fitness%20gear%2C%20healthy%20lifestyle",
      likes: 2234,
      comments: 176
    },
    {
      id: 125,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/video_2025-07-15_18-10-30.mp4",
      username: "ConteudoExclusivo",
      displayName: "Conte\xFAdo Exclusivo",
      description: "Conte\xFAdo exclusivo de hoje! \u{1F4A3} #exclusivo #viral",
      avatar: "assets/exclusivo_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20mysterious%20exclusive%20vibe%2C%20premium%20quality%2C%20feminine%20allure%2C%20seductive%20look",
      likes: 4567,
      comments: 345
    },
    {
      id: 126,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/WhiteFairy.mp4",
      username: "WhiteFairy",
      displayName: "White Fairy",
      description: "White Fairy m\xE1gica! \u2728 #fairy #amazing",
      avatar: "assets/whitefairy_avatar.png?prompt=Ethereal%20Brazilian%20woman%20with%20white%20theme%2C%20fairy%20like%20feminine%20beauty%2C%20magical%20vibe%2C%20angelic%20features",
      likes: 3456,
      comments: 267
    },
    {
      id: 127,
      videoUrl: "https://testefacility.b-cdn.net/Novos%20video%20menina15/07/WhiteFairy01.mp4",
      username: "WhiteFairy",
      displayName: "White Fairy",
      description: "White Fairy parte 2! \u{1F31F} #magical #content",
      avatar: "assets/whitefairy_avatar.png?prompt=Ethereal%20woman%20with%20white%20theme%2C%20fairy%20like%20beauty%2C%20magical%20vibe",
      likes: 2890,
      comments: 198
    },
    {
      id: 1,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/AgnesNunes.mp4",
      username: "AgnesNunes",
      displayName: "Agnes Nunes",
      description: "Conte\xFAdo exclusivo da Agnes \u{1F525} #viral #brasil #trending",
      avatar: "assets/agnes_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20dark%20hair%2C%20professional%20headshot%2C%20warm%20smile%2C%20studio%20lighting",
      likes: 1250,
      comments: 89,
      gallery: [
        "assets/agnes_1.png?prompt=Agnes%20Nunes%20Brazilian%20woman%20beach%20photo%2C%20summer%20vibes%2C%20bikini%2C%20ocean%20background",
        "assets/agnes_2.png?prompt=Agnes%20Nunes%20selfie%20style%2C%20bedroom%20photo%2C%20casual%20outfit%2C%20natural%20lighting",
        "assets/agnes_3.png?prompt=Agnes%20Nunes%20gym%20workout%20photo%2C%20fitness%20outfit%2C%20athletic%20pose",
        "assets/agnes_4.png?prompt=Agnes%20Nunes%20party%20dress%2C%20night%20out%20style%2C%20glamorous%20makeup",
        "assets/agnes_5.png?prompt=Agnes%20Nunes%20mirror%20selfie%2C%20stylish%20outfit%2C%20confident%20pose",
        "assets/agnes_6.png?prompt=Agnes%20Nunes%20outdoor%20photo%2C%20park%20setting%2C%20casual%20day%20look",
        "assets/agnes_7.png?prompt=Agnes%20Nunes%20professional%20photoshoot%2C%20studio%20lighting%2C%20model%20pose",
        "assets/agnes_8.png?prompt=Agnes%20Nunes%20travel%20photo%2C%20vacation%20vibes%2C%20tourist%20destination",
        "assets/agnes_9.png?prompt=Agnes%20Nunes%20restaurant%20photo%2C%20dinner%20outfit%2C%20elegant%20style",
        "assets/agnes_10.png?prompt=Agnes%20Nunes%20home%20photo%2C%20cozy%20atmosphere%2C%20relaxed%20mood"
      ]
    },
    {
      id: 2,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/AniRocha.mp4",
      username: "AniRocha",
      displayName: "Ani Rocha",
      description: "Ani Rocha mandando muito bem! \u2728 #content #amazing",
      avatar: "assets/ani_avatar.png?prompt=Latina%20woman%20with%20curly%20hair%2C%20bright%20eyes%2C%20confident%20expression%2C%20natural%20makeup",
      likes: 890,
      comments: 45,
      gallery: [
        "keys/ani_1?prompt=Ani%20Rocha%20beach%20vacation%2C%20tropical%20setting%2C%20summer%20bikini",
        "keys/ani_2?prompt=Ani%20Rocha%20city%20street%20style%2C%20urban%20fashion%2C%20confident%20walk",
        "keys/ani_3?prompt=Ani%20Rocha%20coffee%20shop%20selfie%2C%20casual%20day%2C%20natural%20smile",
        "keys/ani_4?prompt=Ani%20Rocha%20nightclub%20outfit%2C%20party%20dress%2C%20dancing%20pose",
        "keys/ani_5?prompt=Ani%20Rocha%20bedroom%20photo%2C%20morning%20light%2C%20intimate%20moment",
        "keys/ani_6?prompt=Ani%20Rocha%20workout%20gear%2C%20gym%20session%2C%20fitness%20motivation",
        "keys/ani_7?prompt=Ani%20Rocha%20poolside%20photo%2C%20hotel%20vacation%2C%20luxury%20vibes",
        "keys/ani_8?prompt=Ani%20Rocha%20shopping%20mall%2C%20fashion%20haul%2C%20trendy%20outfit",
        "keys/ani_9?prompt=Ani%20Rocha%20restaurant%20dinner%2C%20date%20night%20look%2C%20elegant%20dress",
        "keys/ani_10?prompt=Ani%20Rocha%20car%20selfie%2C%20road%20trip%20vibes%2C%20sunglasses%20style"
      ]
    },
    {
      id: 3,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Biatrois.mp4",
      username: "Biatrois",
      displayName: "Bia Trois",
      description: "Bia arrasando como sempre \u{1F31F} #criativo #brasil #viral",
      avatar: "assets/bia_avatar.png?prompt=Young%20Brazilian%20woman%20with%20blonde%20hair%2C%20playful%20smile%2C%20modern%20style%2C%20casual%20portrait",
      likes: 2100,
      comments: 156,
      gallery: [
        "assets/bia_1.png?prompt=Bia%20Trois%20blonde%20beach%20photo%2C%20sunny%20day%2C%20colorful%20bikini",
        "assets/bia_2.png?prompt=Bia%20Trois%20mirror%20selfie%2C%20bedroom%20style%2C%20playful%20pose",
        "assets/bia_3.png?prompt=Bia%20Trois%20party%20night%2C%20club%20outfit%2C%20neon%20lights",
        "assets/bia_4.png?prompt=Bia%20Trois%20casual%20street%2C%20daytime%20look%2C%20urban%20background",
        "assets/bia_5.png?prompt=Bia%20Trois%20spa%20day%2C%20relaxation%20mode%2C%20wellness%20vibes",
        "assets/bia_6.png?prompt=Bia%20Trois%20festival%20outfit%2C%20music%20event%2C%20bohemian%20style",
        "assets/bia_7.png?prompt=Bia%20Trois%20rooftop%20photo%2C%20city%20skyline%2C%20sunset%20lighting",
        "assets/bia_8.png?prompt=Bia%20Trois%20brunch%20date%2C%20cafe%20setting%2C%20cute%20outfit",
        "assets/bia_9.png?prompt=Bia%20Trois%20workout%20session%2C%20yoga%20pose%2C%20athletic%20wear",
        "assets/bia_10.png?prompt=Bia%20Trois%20travel%20photo%2C%20airport%20style%2C%20adventure%20ready"
      ]
    },
    {
      id: 4,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Ester%20Muniz.MP4",
      username: "EstherMuniz",
      displayName: "Ester Muniz",
      description: "Ester Muniz com conte\xFAdo incr\xEDvel \u{1F4AB} #amazing #content",
      avatar: "assets/ester_avatar.png?prompt=Elegant%20Brazilian%20woman%20with%20straight%20hair%2C%20sophisticated%20look%2C%20professional%20photo",
      likes: 3200,
      comments: 240,
      gallery: [
        "assets/ester_1.png?prompt=Ester%20Muniz%20elegant%20evening%20dress%2C%20luxury%20event%2C%20sophisticated%20style",
        "assets/ester_2.png?prompt=Ester%20Muniz%20business%20outfit%2C%20professional%20photoshoot%2C%20confident%20pose",
        "assets/ester_3.png?prompt=Ester%20Muniz%20beach%20vacation%2C%20resort%20style%2C%20elegant%20swimwear",
        "assets/ester_4.png?prompt=Ester%20Muniz%20red%20carpet%20look%2C%20glamorous%20makeup%2C%20formal%20gown",
        "assets/ester_5.png?prompt=Ester%20Muniz%20casual%20weekend%2C%20shopping%20outfit%2C%20relaxed%20vibe",
        "assets/ester_6.png?prompt=Ester%20Muniz%20spa%20day%2C%20wellness%20routine%2C%20natural%20beauty",
        "assets/ester_7.png?prompt=Ester%20Muniz%20dinner%20date%2C%20restaurant%20setting%2C%20chic%20dress",
        "assets/ester_8.png?prompt=Ester%20Muniz%20home%20office%2C%20work%20from%20home%2C%20professional%20casual",
        "assets/ester_9.png?prompt=Ester%20Muniz%20travel%20photo%2C%20airplane%20style%2C%20jet%20setter%20look",
        "assets/ester_10.png?prompt=Ester%20Muniz%20morning%20routine%2C%20bedroom%20photo%2C%20intimate%20moment"
      ]
    },
    {
      id: 5,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/GabriellaEuz%C3%A9bio.mp4",
      username: "GabriellaEuzebio",
      displayName: "Gabriella Euz\xE9bio",
      description: "Gabriella mandando ver! \u{1F525} #viral #brasil #top",
      avatar: "assets/gabriella_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20wavy%20hair%2C%20glamorous%20makeup%2C%20confident%20feminine%20pose%2C%20stunning%20beauty",
      likes: 1580,
      comments: 92
    },
    {
      id: 6,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Hellen%20Beatriz.mp4",
      username: "HellenBeatriz",
      displayName: "Hellen Beatriz",
      description: "Hellen Beatriz arrasando \u{1F4A5} #trending #amazing",
      avatar: "assets/hellen_avatar.png?prompt=Beautiful%20Latina%20woman%20with%20dark%20hair%2C%20striking%20feminine%20features%2C%20natural%20beauty%2C%20warm%20lighting%2C%20graceful%20pose",
      likes: 1890,
      comments: 134
    },
    {
      id: 7,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/IsadoraSantos01.mp4",
      username: "IsadoraSantos",
      displayName: "Isadora Santos",
      description: "Isadora Santos com conte\xFAdo top \u{1F31F} #viral #content",
      avatar: "assets/isadora_avatar.png?prompt=Young%20Brazilian%20woman%20with%20brown%20hair%2C%20sweet%20smile%2C%20girl%20next%20door%20feminine%20vibe%2C%20natural%20beauty",
      likes: 2340,
      comments: 178
    },
    {
      id: 8,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Jeodilon.mp4",
      username: "Jeodilon",
      displayName: "Jeodilon",
      description: "Jeodilon com energia total! \u26A1 #viral #brasil",
      avatar: "assets/jeodilon_avatar.png?prompt=Energetic%20Brazilian%20woman%20with%20vibrant%20personality%2C%20colorful%20feminine%20style%2C%20fun%20expression%2C%20lively%20beauty",
      likes: 967,
      comments: 67
    },
    {
      id: 9,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Lavinia%20Loren.mp4",
      username: "LaviniaLoren",
      displayName: "Lavinia Loren",
      description: "Lavinia Loren simplesmente incr\xEDvel \u{1F496} #amazing #top",
      avatar: "assets/lavinia_avatar.png?prompt=Elegant%20Brazilian%20woman%20with%20long%20blonde%20hair%2C%20sophisticated%20makeup%2C%20luxury%20feminine%20style%2C%20refined%20beauty",
      likes: 1456,
      comments: 99
    },
    {
      id: 10,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/MariRibeiro.mp4",
      username: "MariRibeiro",
      displayName: "Mari Ribeiro",
      description: "Mari Ribeiro arrasando! \u{1F525} #viral #trending",
      avatar: "assets/mari_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20dark%20hair%2C%20radiant%20smile%2C%20natural%20glow",
      likes: 2890,
      comments: 203,
      gallery: [
        "keys/mari_1?prompt=Mari%20Ribeiro%20tropical%20beach%2C%20paradise%20vacation%2C%20colorful%20bikini",
        "keys/mari_2?prompt=Mari%20Ribeiro%20city%20nightlife%2C%20party%20dress%2C%20vibrant%20energy",
        "keys/mari_3?prompt=Mari%20Ribeiro%20fitness%20workout%2C%20gym%20motivation%2C%20athletic%20gear",
        "keys/mari_4?prompt=Mari%20Ribeiro%20cozy%20home%2C%20morning%20coffee%2C%20casual%20comfort",
        "keys/mari_5?prompt=Mari%20Ribeiro%20festival%20style%2C%20music%20event%2C%20bohemian%20outfit",
        "keys/mari_6?prompt=Mari%20Ribeiro%20shopping%20day%2C%20fashion%20haul%2C%20trendy%20look",
        "keys/mari_7?prompt=Mari%20Ribeiro%20sunset%20photo%2C%20golden%20hour%2C%20romantic%20mood",
        "keys/mari_8?prompt=Mari%20Ribeiro%20pool%20party%2C%20summer%20vibes%2C%20fun%20atmosphere",
        "keys/mari_9?prompt=Mari%20Ribeiro%20professional%20shoot%2C%20studio%20lighting%2C%20model%20pose",
        "keys/mari_10?prompt=Mari%20Ribeiro%20road%20trip%2C%20car%20selfie%2C%20adventure%20spirit"
      ]
    },
    {
      id: 11,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/MariRibeiro1.mp4",
      username: "MariRibeiro",
      displayName: "Mari Ribeiro",
      description: "Mari Ribeiro parte 2! \u{1F4AB} #content #amazing",
      avatar: "assets/mari_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20dark%20hair%2C%20radiant%20smile%2C%20natural%20glow",
      likes: 1945,
      comments: 156
    },
    {
      id: 12,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Melissa%20Galmon.MP4",
      username: "MelissaGalmon",
      displayName: "Melissa Galmon",
      description: "Melissa Galmon com tudo! \u{1F31F} #viral #brasil",
      avatar: "assets/melissa_avatar.png?prompt=Beautiful%20Latina%20woman%20with%20wavy%20hair%2C%20glamorous%20feminine%20look%2C%20professional%20modeling%20photo%2C%20stunning%20features",
      likes: 1723,
      comments: 145
    },
    {
      id: 13,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Polemizar.mp4",
      username: "Polemizar",
      displayName: "Polemizar",
      description: "Conte\xFAdo que vai dar o que falar! \u{1F4A5} #trending #viral",
      avatar: "assets/polemizar_avatar.png?prompt=Bold%20Brazilian%20woman%20with%20edgy%20feminine%20style%2C%20confident%20attitude%2C%20modern%20look%2C%20striking%20beauty",
      likes: 3456,
      comments: 287
    },
    {
      id: 14,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/Thain%C3%A1.mp4",
      username: "Thaina",
      displayName: "Thain\xE1",
      description: "Thain\xE1 mandando muito bem! \u2728 #amazing #content",
      avatar: "assets/thaina_avatar.png?prompt=Young%20Brazilian%20woman%20with%20trendy%20feminine%20style%2C%20bright%20smile%2C%20casual%20chic%20look%2C%20natural%20beauty",
      likes: 2167,
      comments: 189
    },
    {
      id: 15,
      videoUrl: "https://testefacility.b-cdn.net/NOVAS%20GAROTAS.COM/TuaniBasotti.mp4",
      username: "TuaniBasotti",
      displayName: "Tuani Basotti",
      description: "Tuani Basotti arrasando! \u{1F525} #viral #top",
      avatar: "assets/tuani_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20hair%2C%20model%20features%2C%20professional%20feminine%20headshot%2C%20elegant%20beauty",
      likes: 1834,
      comments: 123
    },
    {
      id: 16,
      videoUrl: "https://testefacility.b-cdn.net/vasados/vasado01.MP4",
      username: "ConteudoVasado",
      displayName: "Conte\xFAdo Vazado",
      description: "Conte\xFAdo exclusivo vazado! \u{1F4A3} #exclusivo #viral",
      avatar: "assets/vazado_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20mysterious%20silhouette%2C%20dark%20background%2C%20exclusive%20feminine%20content%20vibe%2C%20seductive%20mystery",
      likes: 4567,
      comments: 345
    },
    {
      id: 17,
      videoUrl: "https://testefacility.b-cdn.net/vasados/vasado02.mp4",
      username: "ConteudoVasado",
      displayName: "Conte\xFAdo Vazado",
      description: "Mais conte\xFAdo exclusivo! \u{1F525} #vazado #trending",
      avatar: "assets/vazado_avatar.png?prompt=Mysterious%20silhouette%20with%20question%20mark%2C%20dark%20background%2C%20exclusive%20content%20vibe",
      likes: 3890,
      comments: 289
    },
    {
      id: 18,
      videoUrl: "https://testefacility.b-cdn.net/vasados/vasado03.MP4",
      username: "ConteudoVasado",
      displayName: "Conte\xFAdo Vazado",
      description: "Conte\xFAdo que todo mundo quer ver! \u{1F4AB} #exclusivo",
      avatar: "assets/vazado_avatar.png?prompt=Mysterious%20silhouette%20with%20question%20mark%2C%20dark%20background%2C%20exclusive%20content%20vibe",
      likes: 5234,
      comments: 456
    },
    {
      id: 19,
      videoUrl: "https://testefacility.b-cdn.net/vasados/vasado04.mp4",
      username: "ConteudoVasado",
      displayName: "Conte\xFAdo Vazado",
      description: "Mais um vazado incr\xEDvel! \u{1F31F} #viral #exclusivo",
      avatar: "assets/vazado_avatar.png?prompt=Mysterious%20silhouette%20with%20question%20mark%2C%20dark%20background%2C%20exclusive%20content%20vibe",
      likes: 2967,
      comments: 234
    },
    {
      id: 20,
      videoUrl: "https://testefacility.b-cdn.net/vasados/vasado05.mp4",
      username: "ConteudoVasado",
      displayName: "Conte\xFAdo Vazado",
      description: "Conte\xFAdo top vazado! \u{1F525} #trending #amazing",
      avatar: "assets/vazado_avatar.png?prompt=Mysterious%20silhouette%20with%20question%20mark%2C%20dark%20background%2C%20exclusive%20content%20vibe",
      likes: 3456,
      comments: 312
    },
    {
      id: 21,
      videoUrl: "https://testefacility.b-cdn.net/AmandaAlbuquerque.mp4",
      username: "AmandaAlbuquerque",
      displayName: "Amanda Albuquerque",
      description: "Amanda Albuquerque arrasando! \u{1F4A5} #viral #brasil",
      avatar: "assets/amanda_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20beautiful%20feminine%20features%2C%20warm%20smile%2C%20natural%20beauty%2C%20professional%20photo%2C%20graceful%20pose",
      likes: 2123,
      comments: 167
    },
    {
      id: 22,
      videoUrl: "https://testefacility.b-cdn.net/DyhCosta.mp4",
      username: "DyhCosta",
      displayName: "Dyh Costa",
      description: "Dyh Costa com conte\xFAdo incr\xEDvel! \u2728 #amazing #content",
      avatar: "assets/dyh_avatar.png?prompt=Young%20Brazilian%20woman%20with%20modern%20feminine%20style%2C%20confident%20look%2C%20trendy%20makeup%2C%20beautiful%20features",
      likes: 1789,
      comments: 134
    },
    {
      id: 23,
      videoUrl: "https://testefacility.b-cdn.net/KerolayChaves.mp4",
      username: "KerolayChaves",
      displayName: "Kerolay Chaves",
      description: "Kerolay Chaves mandando ver! \u{1F525} #viral #trending",
      avatar: "assets/kerolay_avatar.png?prompt=Beautiful%20Brazilian%20woman%20with%20long%20hair%2C%20glamorous%20feminine%20style%2C%20stunning%20features%2C%20model%20beauty",
      likes: 3234,
      comments: 245
    },
    {
      id: 24,
      videoUrl: "https://testefacility.b-cdn.net/MarinaLage.mp4",
      username: "MarinaLage",
      displayName: "Marina Lage",
      description: "Marina Lage simplesmente incr\xEDvel! \u{1F496} #amazing #top",
      avatar: "assets/marina_avatar.png?prompt=Elegant%20Brazilian%20woman%20with%20sophisticated%20feminine%20style%2C%20natural%20beauty%2C%20warm%20expression%2C%20graceful%20features",
      likes: 2567,
      comments: 189
    },
    {
      id: 25,
      videoUrl: "https://testefacility.b-cdn.net/MarinaLage01.mp4",
      username: "MarinaLage",
      displayName: "Marina Lage",
      description: "Marina Lage parte 2! \u{1F31F} #content #viral",
      avatar: "assets/marina_avatar.png?prompt=Elegant%20woman%20with%20sophisticated%20style%2C%20natural%20beauty%2C%20warm%20expression",
      likes: 1945,
      comments: 156
    }
  ];
  useEffect(() => {
    const splashTimer = setTimeout(() => {
      setShowSplash(false);
      setShowLogin(true);
    }, 4e3);
    return () => clearTimeout(splashTimer);
  }, []);
  useEffect(() => {
    if (isLoggedIn) {
      const initialLikes = {};
      const initialLikedVideos = {};
      const initialComments = {};
      videos.forEach((video) => {
        initialLikes[video.id] = video.likes;
        initialLikedVideos[video.id] = false;
        initialComments[video.id] = [
          { id: 1, user: "Usuario1", text: "Incr\xEDvel! \u{1F525}", likes: 12 },
          { id: 2, user: "Usuario2", text: "Amei o conte\xFAdo!", likes: 8 },
          { id: 3, user: "Usuario3", text: "Top demais! \u{1F4AB}", likes: 15 }
        ];
      });
      setLikes(initialLikes);
      setLikedVideos(initialLikedVideos);
      setComments(initialComments);
    }
  }, [isLoggedIn]);
  useEffect(() => {
    if (isLoggedIn) {
      const currentVideo2 = videoRefs.current[currentVideoIndex];
      if (currentVideo2) {
        currentVideo2.muted = isMuted;
        currentVideo2.preload = "auto";
        currentVideo2.autoplay = true;
        if (isPlaying) {
          const attemptPlay = async () => {
            try {
              await currentVideo2.play();
            } catch (error) {
              setTimeout(async () => {
                try {
                  await currentVideo2.play();
                } catch (retryError) {
                  setIsPlaying(false);
                }
              }, 100);
            }
          };
          attemptPlay();
        }
      }
      videoRefs.current.forEach((video, index) => {
        if (video) {
          if (index !== currentVideoIndex) {
            video.pause();
            video.currentTime = 0;
          }
          const distance = Math.abs(index - currentVideoIndex);
          if (distance === 0) {
            video.preload = "auto";
          } else if (distance <= 1) {
            video.preload = "metadata";
          } else {
            video.preload = "none";
          }
        }
      });
    }
  }, [currentVideoIndex, isPlaying, isMuted, isLoggedIn]);
  const handleLogin = (e) => {
    e.preventDefault();
    setLoginError("");
    if (!email) {
      setLoginError("Por favor, digite seu email");
      return;
    }
    if (!email.includes("@gmail.com")) {
      setLoginError("Por favor, use um email do Gmail v\xE1lido");
      return;
    }
    if (email.toLowerCase() === "teste@gmail.com") {
      setIsLoggedIn(true);
      setShowLogin(false);
    } else {
      setLoginError("Email n\xE3o autorizado. Use: teste@gmail.com");
    }
  };
  const handleScroll = (e) => {
    const container = e.target;
    const videoHeight = container.clientHeight;
    const scrollTop = container.scrollTop;
    const newIndex = Math.round(scrollTop / videoHeight);
    if (newIndex !== currentVideoIndex && newIndex >= 0 && newIndex < videos.length) {
      setCurrentVideoIndex(newIndex);
      requestAnimationFrame(() => {
        videoRefs.current.forEach((video, index) => {
          if (video) {
            const distance = Math.abs(index - newIndex);
            if (distance === 0) {
              video.preload = "auto";
              if (video.readyState < 2) {
                video.load();
              }
            } else if (distance <= 1) {
              video.preload = "metadata";
            } else {
              video.preload = "none";
              if (video.readyState > 0) {
                video.src = video.src;
              }
            }
          }
        });
      });
    }
  };
  const toggleLike = (videoId) => {
    const isLiked = likedVideos[videoId];
    const newLikes = { ...likes };
    const newLikedVideos = { ...likedVideos };
    if (isLiked) {
      newLikes[videoId] -= 1;
      newLikedVideos[videoId] = false;
    } else {
      newLikes[videoId] += 1;
      newLikedVideos[videoId] = true;
    }
    setLikes(newLikes);
    setLikedVideos(newLikedVideos);
  };
  const togglePlayPause = () => {
    const currentVideo2 = videoRefs.current[currentVideoIndex];
    if (currentVideo2) {
      if (isPlaying) {
        currentVideo2.pause();
      } else {
        currentVideo2.play().catch(() => {
          console.log("Autoplay failed");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };
  const toggleMute = () => {
    setIsMuted(!isMuted);
  };
  const goToFirstVideo = () => {
    const videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
      videoContainer.scrollTop = 0;
      setCurrentVideoIndex(0);
    }
  };
  const addComment = (videoId) => {
    if (newComment.trim()) {
      const newCommentObj = {
        id: Date.now(),
        user: "Voc\xEA",
        text: newComment,
        likes: 0
      };
      setComments((prev) => ({
        ...prev,
        [videoId]: [...prev[videoId] || [], newCommentObj]
      }));
      setNewComment("");
    }
  };
  const formatNumber = (num) => {
    if (num >= 1e6) {
      return (num / 1e6).toFixed(1) + "M";
    }
    if (num >= 1e3) {
      return (num / 1e3).toFixed(1) + "K";
    }
    return num.toString();
  };
  const handleVideoRef = (el, index) => {
    videoRefs.current[index] = el;
  };
  const openGallery = (video) => {
    if (video.gallery) {
      setGalleryImages(video.gallery);
      setCurrentImageIndex(0);
      setShowGallery(true);
    }
  };
  const closeGallery = () => {
    setShowGallery(false);
    setGalleryImages([]);
    setCurrentImageIndex(0);
  };
  const nextImage = () => {
    setCurrentImageIndex(
      (prev) => prev < galleryImages.length - 1 ? prev + 1 : 0
    );
  };
  const prevImage = () => {
    setCurrentImageIndex(
      (prev) => prev > 0 ? prev - 1 : galleryImages.length - 1
    );
  };
  const currentVideo = videos[currentVideoIndex];
  if (showSplash) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full bg-black flex items-center justify-center", style: { minHeight: "600px" } }, /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "animate-pulse" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "assets/5ZffSBK2RF9l_OD7OkGQG.png",
        alt: "Logo",
        className: "w-48 h-auto mx-auto mb-4"
      }
    )), /* @__PURE__ */ React.createElement("div", { className: "w-16 h-16 mx-auto" }, /* @__PURE__ */ React.createElement("div", { className: "w-full h-full border-4 border-white border-t-transparent rounded-full animate-spin" }))));
  }
  if (showLogin && !isLoggedIn) {
    return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full bg-black bg-opacity-95 flex items-center justify-center", style: { minHeight: "600px" } }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-900 rounded-lg p-8 max-w-md w-full mx-4 shadow-2xl" }, /* @__PURE__ */ React.createElement("div", { className: "text-center mb-8" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "assets/5ZffSBK2RF9l_OD7OkGQG.png",
        alt: "Logo",
        className: "w-32 h-auto mx-auto mb-4"
      }
    ), /* @__PURE__ */ React.createElement("h2", { className: "text-white text-2xl font-bold mb-2" }, "Acesso Restrito"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "Para logar no app voc\xEA precisa estar logado com seu Gmail de acesso")), /* @__PURE__ */ React.createElement("form", { onSubmit: handleLogin, className: "space-y-6" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3 mb-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-white rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: "assets/sHF0MKmc9H5-YPHvejjyO.png",
        alt: "Google Chrome",
        className: "w-8 h-8"
      }
    )), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-white font-semibold" }, "Google Chrome"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "Autentica\xE7\xE3o segura"))), /* @__PURE__ */ React.createElement(
      "input",
      {
        type: "email",
        value: email,
        onChange: (e) => setEmail(e.target.value),
        placeholder: "seu-email@gmail.com",
        className: "w-full bg-gray-800 text-white p-4 rounded-lg border border-gray-700 focus:border-red-500 focus:outline-none",
        required: true
      }
    )), loginError && /* @__PURE__ */ React.createElement("div", { className: "bg-red-900 bg-opacity-50 border border-red-500 text-red-400 p-3 rounded-lg text-sm" }, loginError), /* @__PURE__ */ React.createElement(
      "button",
      {
        type: "submit",
        className: "w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-blue-700 transition-all flex items-center justify-center space-x-2"
      },
      /* @__PURE__ */ React.createElement(
        "img",
        {
          src: "assets/sHF0MKmc9H5-YPHvejjyO.png",
          alt: "Google Chrome",
          className: "w-5 h-5"
        }
      ),
      /* @__PURE__ */ React.createElement("span", null, "Entrar com Google")
    )), /* @__PURE__ */ React.createElement("div", { className: "mt-6 text-center" }, /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-xs" }, "\u26A0\uFE0F Apenas usu\xE1rios autorizados podem acessar este conte\xFAdo"))));
  }
  if (!isLoggedIn) {
    return null;
  }
  return /* @__PURE__ */ React.createElement("div", { className: "w-full h-full bg-black relative overflow-hidden", style: { minHeight: "600px" } }, /* @__PURE__ */ React.createElement("div", { className: "absolute top-0 left-0 right-0 z-20 flex justify-between items-center p-4" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowSidebar(true),
      className: "text-white p-2 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement(Menu, { className: "w-6 h-6" })
  ), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-8" }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-lg font-medium opacity-60" }, "Following"), /* @__PURE__ */ React.createElement("div", { className: "flex items-center" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: "assets/b6RXiLwhpRhDzmRaoWzcw.png",
      alt: "Logo",
      className: "h-8 w-auto"
    }
  ))), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleMute,
      className: "text-white p-2 hover:bg-gray-800 rounded-full"
    },
    isMuted ? /* @__PURE__ */ React.createElement(VolumeX, { className: "w-6 h-6" }) : /* @__PURE__ */ React.createElement(Volume2, { className: "w-6 h-6" })
  ))), showSidebar && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-50 flex" }, /* @__PURE__ */ React.createElement("div", { className: "w-80 bg-gray-900 h-full overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-white text-xl font-bold" }, "Menu"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowSidebar(false),
      className: "text-white p-2 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement(X, { className: "w-6 h-6" })
  ))), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3 mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement(User, { className: "w-6 h-6 text-white" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-white font-semibold" }, "Meu Perfil"), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, email))), /* @__PURE__ */ React.createElement("div", { className: "space-y-4" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: goToFirstVideo,
      className: "w-full flex items-center space-x-3 p-3 text-white hover:bg-gray-800 rounded-lg"
    },
    /* @__PURE__ */ React.createElement(Home, { className: "w-5 h-5" }),
    /* @__PURE__ */ React.createElement("span", null, "In\xEDcio")
  ), /* @__PURE__ */ React.createElement("button", { className: "w-full flex items-center space-x-3 p-3 text-white hover:bg-gray-800 rounded-lg" }, /* @__PURE__ */ React.createElement(Heart, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, "Curtidas")), /* @__PURE__ */ React.createElement("button", { className: "w-full flex items-center space-x-3 p-3 text-white hover:bg-gray-800 rounded-lg" }, /* @__PURE__ */ React.createElement(Bell, { className: "w-5 h-5" }), /* @__PURE__ */ React.createElement("span", null, "Notifica\xE7\xF5es")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: toggleMute,
      className: "w-full flex items-center space-x-3 p-3 text-white hover:bg-gray-800 rounded-lg"
    },
    isMuted ? /* @__PURE__ */ React.createElement(VolumeX, { className: "w-5 h-5" }) : /* @__PURE__ */ React.createElement(Volume2, { className: "w-5 h-5" }),
    /* @__PURE__ */ React.createElement("span", null, isMuted ? "Ativar Som" : "Desativar Som")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowVipPopup(true),
      className: "w-full flex items-center space-x-3 p-3 text-white hover:bg-gray-800 rounded-lg"
    },
    /* @__PURE__ */ React.createElement(Crown, { className: "w-5 h-5 text-yellow-500" }),
    /* @__PURE__ */ React.createElement("span", null, "Conte\xFAdo VIP")
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => {
        setIsLoggedIn(false);
        setShowLogin(true);
        setEmail("");
      },
      className: "w-full flex items-center space-x-3 p-3 text-red-400 hover:bg-gray-800 rounded-lg"
    },
    /* @__PURE__ */ React.createElement(Mail, { className: "w-5 h-5" }),
    /* @__PURE__ */ React.createElement("span", null, "Sair")
  )))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex-1 bg-black bg-opacity-50",
      onClick: () => setShowSidebar(false)
    }
  )), showComments && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-50 flex" }, /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "flex-1 bg-black bg-opacity-50",
      onClick: () => setShowComments(false)
    }
  ), /* @__PURE__ */ React.createElement("div", { className: "w-96 bg-gray-900 h-full overflow-y-auto" }, /* @__PURE__ */ React.createElement("div", { className: "p-4 border-b border-gray-700" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center" }, /* @__PURE__ */ React.createElement("h2", { className: "text-white text-xl font-bold" }, "Coment\xE1rios"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowComments(false),
      className: "text-white p-2 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement(X, { className: "w-6 h-6" })
  ))), /* @__PURE__ */ React.createElement("div", { className: "p-4" }, /* @__PURE__ */ React.createElement("div", { className: "space-y-4 mb-4" }, comments[currentVideo?.id]?.map((comment) => /* @__PURE__ */ React.createElement("div", { key: comment.id, className: "flex space-x-3" }, /* @__PURE__ */ React.createElement("div", { className: "w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement(User, { className: "w-4 h-4 text-white" })), /* @__PURE__ */ React.createElement("div", { className: "flex-1" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-2" }, /* @__PURE__ */ React.createElement("span", { className: "text-white font-semibold text-sm" }, comment.user), /* @__PURE__ */ React.createElement("span", { className: "text-gray-400 text-xs" }, "agora")), /* @__PURE__ */ React.createElement("p", { className: "text-white text-sm" }, comment.text), /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-4 mt-1" }, /* @__PURE__ */ React.createElement("button", { className: "text-gray-400 text-xs hover:text-white" }, "\u2764\uFE0F ", comment.likes), /* @__PURE__ */ React.createElement("button", { className: "text-gray-400 text-xs hover:text-white" }, "Responder")))))), /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2" }, /* @__PURE__ */ React.createElement(
    "input",
    {
      type: "text",
      value: newComment,
      onChange: (e) => setNewComment(e.target.value),
      placeholder: "Adicionar coment\xE1rio...",
      className: "flex-1 bg-gray-800 text-white p-2 rounded-lg text-sm",
      onKeyPress: (e) => e.key === "Enter" && addComment(currentVideo?.id)
    }
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => addComment(currentVideo?.id),
      className: "bg-pink-500 text-white p-2 rounded-lg hover:bg-pink-600"
    },
    "Enviar"
  ))))), showGallery && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-50 bg-black flex items-center justify-center" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: closeGallery,
      className: "absolute top-4 right-4 z-60 text-white p-3 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement(X, { className: "w-8 h-8" })
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute top-4 left-4 z-60 text-white bg-black bg-opacity-50 px-3 py-1 rounded-full" }, /* @__PURE__ */ React.createElement("span", { className: "text-sm font-semibold" }, currentImageIndex + 1, " / ", galleryImages.length)), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: prevImage,
      className: "absolute left-4 top-1/2 transform -translate-y-1/2 z-60 text-white p-3 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M15 19l-7-7 7-7" }))
  ), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: nextImage,
      className: "absolute right-4 top-1/2 transform -translate-y-1/2 z-60 text-white p-3 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement("svg", { className: "w-8 h-8", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24" }, /* @__PURE__ */ React.createElement("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M9 5l7 7-7 7" }))
  ), /* @__PURE__ */ React.createElement("div", { className: "w-full h-full flex items-center justify-center p-4" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: galleryImages[currentImageIndex],
      alt: `Foto ${currentImageIndex + 1}`,
      className: "max-w-full max-h-full object-contain",
      onClick: nextImage
    }
  )), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-4 left-0 right-0 flex justify-center" }, /* @__PURE__ */ React.createElement("div", { className: "flex space-x-2 bg-black bg-opacity-50 p-2 rounded-lg max-w-xs overflow-x-auto" }, galleryImages.map((image, index) => /* @__PURE__ */ React.createElement(
    "button",
    {
      key: index,
      onClick: () => setCurrentImageIndex(index),
      className: `flex-shrink-0 w-12 h-12 rounded border-2 overflow-hidden ${index === currentImageIndex ? "border-white" : "border-gray-500"}`
    },
    /* @__PURE__ */ React.createElement(
      "img",
      {
        src: image,
        alt: `Thumbnail ${index + 1}`,
        className: "w-full h-full object-cover"
      }
    )
  )))), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-20 left-1/2 transform -translate-x-1/2 text-white text-sm bg-black bg-opacity-50 px-3 py-1 rounded-full" }, "\u{1F446} Toque na imagem para avan\xE7ar")), showVipPopup && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75" }, /* @__PURE__ */ React.createElement("div", { className: "bg-gray-900 rounded-lg p-6 max-w-md w-full mx-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-between items-center mb-4" }, /* @__PURE__ */ React.createElement("h2", { className: "text-white text-xl font-bold flex items-center" }, /* @__PURE__ */ React.createElement(Crown, { className: "w-6 h-6 mr-2 text-yellow-500" }), "Conte\xFAdo VIP +18"), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => setShowVipPopup(false),
      className: "text-white p-2 hover:bg-gray-800 rounded-full"
    },
    /* @__PURE__ */ React.createElement(X, { className: "w-6 h-6" })
  )), /* @__PURE__ */ React.createElement("div", { className: "mb-6" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3 mb-4" }, /* @__PURE__ */ React.createElement(
    "img",
    {
      src: currentVideo?.avatar,
      alt: currentVideo?.displayName,
      className: "w-12 h-12 rounded-full object-cover"
    }
  ), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h3", { className: "text-white font-semibold" }, currentVideo?.displayName), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "@", currentVideo?.username))), /* @__PURE__ */ React.createElement("p", { className: "text-white text-sm mb-4" }, currentVideo?.description), /* @__PURE__ */ React.createElement("div", { className: "bg-gray-800 rounded-lg p-4 mb-4" }, /* @__PURE__ */ React.createElement("h4", { className: "text-white font-semibold mb-2 flex items-center" }, /* @__PURE__ */ React.createElement(Crown, { className: "w-5 h-5 mr-2 text-yellow-500" }), "Conte\xFAdo VIP Inclui:"), /* @__PURE__ */ React.createElement("ul", { className: "text-gray-300 text-sm space-y-1" }, /* @__PURE__ */ React.createElement("li", null, "\u2022 V\xEDdeos exclusivos sem censura"), /* @__PURE__ */ React.createElement("li", null, "\u2022 Fotos premium em alta qualidade"), /* @__PURE__ */ React.createElement("li", null, "\u2022 Conte\xFAdo personalizado"), /* @__PURE__ */ React.createElement("li", null, "\u2022 Acesso antecipado a novos v\xEDdeos"), /* @__PURE__ */ React.createElement("li", null, "\u2022 Chat direto com as criadoras"))), /* @__PURE__ */ React.createElement("div", { className: "text-center" }, /* @__PURE__ */ React.createElement("div", { className: "text-3xl font-bold text-white mb-2" }, "R$ 29,90", /* @__PURE__ */ React.createElement("span", { className: "text-lg text-gray-400 ml-1" }, "/m\xEAs")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-400 text-sm" }, "Cancele quando quiser"))), /* @__PURE__ */ React.createElement("div", { className: "space-y-3" }, /* @__PURE__ */ React.createElement("button", { className: "w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black py-3 rounded-lg font-semibold hover:from-yellow-600 hover:to-yellow-700 transition-all flex items-center justify-center" }, /* @__PURE__ */ React.createElement(Crown, { className: "w-5 h-5 mr-2" }), "Compre Agora - Acesso VIP"), /* @__PURE__ */ React.createElement("button", { className: "w-full bg-gray-700 text-white py-3 rounded-lg font-semibold hover:bg-gray-600 transition-all" }, "\u{1F512} Meus Conte\xFAdos VIP")), /* @__PURE__ */ React.createElement("p", { className: "text-gray-500 text-xs text-center mt-4" }, "\u26A0\uFE0F Conte\xFAdo apenas para maiores de 18 anos"))), /* @__PURE__ */ React.createElement(
    "div",
    {
      className: "video-container h-full overflow-y-scroll snap-y snap-mandatory",
      onScroll: handleScroll,
      style: {
        scrollbarWidth: "none",
        msOverflowStyle: "none"
      }
    },
    videos.map((video, index) => /* @__PURE__ */ React.createElement("div", { key: video.id, className: "relative h-full w-full snap-start flex items-center justify-center", style: { minHeight: "600px" } }, /* @__PURE__ */ React.createElement(
      "video",
      {
        ref: (el) => handleVideoRef(el, index),
        src: video.videoUrl,
        className: "w-full h-full object-cover",
        loop: true,
        muted: isMuted,
        playsInline: true,
        "webkit-playsinline": "true",
        autoPlay: index === currentVideoIndex,
        preload: Math.abs(index - currentVideoIndex) <= 1 ? "metadata" : "none",
        onClick: togglePlayPause,
        onLoadedData: () => {
          if (index === currentVideoIndex && isPlaying) {
            const videoEl = videoRefs.current[index];
            if (videoEl && videoEl.readyState >= 2) {
              videoEl.play().catch(() => {
              });
            }
          }
        },
        onCanPlay: () => {
          if (index === currentVideoIndex && isPlaying) {
            const videoEl = videoRefs.current[index];
            if (videoEl) {
              videoEl.play().catch(() => {
              });
            }
          }
        },
        onCanPlayThrough: () => {
          if (index === currentVideoIndex && isPlaying) {
            const videoEl = videoRefs.current[index];
            if (videoEl) {
              videoEl.play().catch(() => {
              });
            }
          }
        },
        onError: () => {
          const videoEl = videoRefs.current[index];
          if (videoEl) {
            if (video.videoUrl.includes("Flaga%20na%20rua02.mp4")) {
              console.log("Aplicando corre\xE7\xE3o espec\xEDfica para Flaga na rua02.mp4");
              videoEl.preload = "auto";
              videoEl.crossOrigin = "anonymous";
              videoEl.muted = true;
              videoEl.playsInline = true;
              setTimeout(() => {
                videoEl.load();
                setTimeout(() => {
                  if (index === currentVideoIndex && isPlaying && videoEl.readyState >= 2) {
                    videoEl.play().catch((playError) => {
                      console.log("Falha na reprodu\xE7\xE3o autom\xE1tica:", playError);
                      setTimeout(() => {
                        videoEl.play().catch(() => {
                        });
                      }, 1e3);
                    });
                  }
                }, 300);
              }, 200);
            } else {
              setTimeout(() => {
                videoEl.load();
              }, 1e3);
            }
          }
        }
      }
    ), !isPlaying && index === currentVideoIndex && /* @__PURE__ */ React.createElement("div", { className: "absolute inset-0 flex items-center justify-center pointer-events-none" }, /* @__PURE__ */ React.createElement("div", { className: "bg-black bg-opacity-50 rounded-full p-4" }, /* @__PURE__ */ React.createElement(Play, { className: "text-white w-12 h-12", fill: "white" }))), /* @__PURE__ */ React.createElement("div", { className: "absolute right-4 bottom-20 flex flex-col items-center space-y-6" }, /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(
      "img",
      {
        src: video.avatar,
        alt: video.displayName,
        className: "w-12 h-12 rounded-full border-2 border-white object-cover"
      }
    ), /* @__PURE__ */ React.createElement("div", { className: "absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs font-bold" }, "+"))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => toggleLike(video.id),
        className: "p-3 rounded-full hover:bg-gray-800 transition-colors"
      },
      /* @__PURE__ */ React.createElement(
        Heart,
        {
          className: `w-8 h-8 ${likedVideos[video.id] ? "text-red-500 fill-red-500" : "text-white"}`
        }
      )
    ), /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs font-semibold mt-1" }, formatNumber(likes[video.id] || 0))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowComments(true),
        className: "p-3 rounded-full hover:bg-gray-800 transition-colors"
      },
      /* @__PURE__ */ React.createElement(MessageCircle, { className: "w-8 h-8 text-white" })
    ), /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs font-semibold mt-1" }, formatNumber(video.comments))), /* @__PURE__ */ React.createElement("div", { className: "flex flex-col items-center" }, /* @__PURE__ */ React.createElement(
      "button",
      {
        onClick: () => setShowVipPopup(true),
        className: "relative p-3 rounded-full hover:bg-gray-800 transition-colors bg-gradient-to-r from-yellow-500 to-yellow-600 animate-pulse"
      },
      /* @__PURE__ */ React.createElement(Crown, { className: "w-8 h-8 text-white" }),
      /* @__PURE__ */ React.createElement("div", { className: "absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center" }, /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs font-bold" }, "!"))
    ), /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs font-semibold mt-1" }, "VIP"))), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-4 left-4 right-20 text-white" }, /* @__PURE__ */ React.createElement("div", { className: "flex items-center space-x-3 mb-3" }, /* @__PURE__ */ React.createElement("span", { className: "font-semibold text-lg" }, "@", video.username), /* @__PURE__ */ React.createElement("span", { className: "text-sm opacity-75" }, "\u2022 ", video.displayName)), /* @__PURE__ */ React.createElement("p", { className: "text-sm mb-2 leading-relaxed" }, video.description))))
  ), /* @__PURE__ */ React.createElement("div", { className: "absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4" }, /* @__PURE__ */ React.createElement("div", { className: "flex justify-center space-x-16" }, /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: goToFirstVideo,
      className: "flex flex-col items-center space-y-1"
    },
    /* @__PURE__ */ React.createElement(Home, { className: "w-6 h-6 text-white" }),
    /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs" }, "In\xEDcio")
  ), /* @__PURE__ */ React.createElement("button", { className: "flex flex-col items-center space-y-1" }, /* @__PURE__ */ React.createElement(Bell, { className: "w-6 h-6 text-white" }), /* @__PURE__ */ React.createElement("span", { className: "text-white text-xs" }, "Notifica\xE7\xF5es")), /* @__PURE__ */ React.createElement(
    "button",
    {
      onClick: () => window.open("https://t.me/onyfansbrasil2025", "_blank"),
      className: "flex flex-col items-center space-y-1"
    },
    /* @__PURE__ */ React.createElement("div", { className: "relative" }, /* @__PURE__ */ React.createElement(Crown, { className: "w-6 h-6 text-yellow-500" }), /* @__PURE__ */ React.createElement("div", { className: "absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full animate-pulse" })),
    /* @__PURE__ */ React.createElement("span", { className: "text-yellow-500 text-xs font-semibold" }, "VIP")
  ))));
};
var stdin_default = TikTokApp;
export {
  stdin_default as default
};
