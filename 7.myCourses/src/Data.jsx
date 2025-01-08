import MVC_CV from "./images/mvc.png";
import Portfolio from "./images/portfolio.png";
import Blog from "./images/blog.png";
import Store from "./images/store.png"

export const courses = [
    {
        id: 1,
        title: "MVC ile Dinamik Cv Sitesi",
        description: "Bu proje, kullanıcıların özgeçmişlerini oluşturabileceği ve yönetebileceği dinamik bir CV projesidir.",
        price: 120,
        link: "https://github.com/boraygulpinar/MVC_CV",
        image: MVC_CV
    },
    {
        id: 2,
        title: "MyPortfolio",
        description: "C#, HTML, CSS, JS ve .NET kullanılarak geliştirilen portfolyö projesi",
        price: 80,
        link: "https://github.com/boraygulpinar/MyPortfolio",
        image: Portfolio
    },
    {
        id: 3,
        title: "BlogApp",
        description: "Bu proje, çeşitli alanlardaki kategorilerde blog yazıları paylaşımının yapıldığı, üyelik sistemine dayanan bir ASP.Net Core projesidir. Kullanıcılar siteye kayıt olduktan sonra yorum yapabilir, blog yazısı paylaşabilir.",
        price: 250,
        link: "https://github.com/boraygulpinar/BlogApp",
        image: Blog
    },
    {
        id: 4,
        title: "StoreApp",
        description: "Kullanıcının sepet oluşturarak ürün satın alabileceği bir mağaza uygulaması",
        price: 135,
        link: "https://github.com/boraygulpinar/StoreApp",
        image: Store
    }
]