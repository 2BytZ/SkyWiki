// The parts every page shares, written once (like the React components were).
// Use them in a page as tags:
//
//   <site-header></site-header>                    the navbar           (was <Navbar/>)
//   <site-footer></site-footer>                    the site footer      (was <Footer/>)
//   <page-footer></page-footer>                    the article footer   (was <PageFooter/>)
//   <table-of-contents></table-of-contents>        the contents sidebar (was <TableOfContents/>)
//   <page-notice type="language"></page-notice>    a notice box         (was PageNotice("language"));
//                                                  types: language, construction, missing-translation
//
// This file is loaded in each page's <head> without "defer", so the parts are in place
// before the page is first drawn.

(function () {
    var dark = document.documentElement.dataset.theme === "dark"
    var logo = dark ? "/images/Shadowmarks_Thieves_Guild_Sign_darkmode.png" : "/images/Shadowmarks_Thieves_Guild_Sign.png"

    var siteHeader = `
<header class="ts-container">
    <div class="ts-inner">
        <div class="hamburger-menu">
            <button type="button" class="mobile-nav-toggle" aria-label="Toggle navigation" aria-controls="mobile-navigation" aria-expanded="false">☰</button>
        </div>
        <div class="logo">
            <a href="/wiki/Home.html" class="mw-logo" aria-label="Home"><img class="theme-logo" src="${logo}" alt=""></a>
        </div>
        <nav class="navbar">
            <ul class="nav-main">
                <li><a class="nav-link" href="/wiki/Home.html"><button class="navbutton" tabindex="-1"><img src="/assets/Town.png" alt="">Home</button></a></li>
                <li><a class="nav-link" href="/wiki/Dranleic_Haligdrake.html"><button class="navbutton" tabindex="-1"><img src="/assets/dragonborne_warrior.png" alt="">Dranleic Haligdrake</button></a></li>
                <li><a class="nav-link" href="/wiki/Pharis_Ironeye.html"><button class="navbutton" tabindex="-1"><img src="/assets/bow_and_drinks.png" alt="">Pharis Ironeye</button></a></li>
                <li><a class="nav-link"><button type="button" class="navbutton"><img src="/assets/frost_and_greatsword.png" alt="">Priscilla Aurora</button></a></li>
                <li><a class="nav-link"><button type="button" class="navbutton"><img src="/assets/wealth_and_pike.png" alt="">Gwyndolin Golden-Wing</button></a></li>
                <li><a class="nav-link"><button type="button" class="navbutton"><img src="/assets/hermaeus-morah.png" style="filter: invert;" alt="">Lahvriiluz</button></a></li>
            </ul>
            <div class="navbar-right">
                <div class="settings" id="settings-panel" inert>
                    <img class="navbar-right-background" src="/assets/inventory_filter_box.png" alt="">
                    <div class="settings-content">
                        <div class="settings-controls">
                            <label class="nav-language-control">
                                <span data-i18n="navbar:lang" data-dov-class="dovahzul"></span>
                                <span><select id="lang-nav"><option value="en">English</option><option value="da">Dansk</option><option value="dov" class="dovahzul-lang-dropdown">Dovahzul</option></select></span>
                            </label>
                            <img class="navbar-right-separator" src="/assets/inventory_filter_separator.png" alt="">
                            <button title="${dark ? "Nocturnal mode" : "Meridia mode"}" class="theme-toggle-btn" type="button" aria-pressed="${dark}"><img id="theme-icon" src="${dark ? "/assets/theme_darkmode_moon.png" : "/assets/theme_lightmode_sun.png"}" alt="Mode" width="30" height="30"></button>
                        </div>
                    </div>
                </div>
                <button type="button" class="settings-button" aria-expanded="false" aria-controls="settings-panel">
                    <img class="settings-cog" src="../assets/inventory_settings.png" alt="Settings">
                </button>
            </div>
        </nav>
        <nav id="mobile-navigation" class="mobile-navigation" hidden>
            <a href="/wiki/Home.html" class="mw-logo" aria-label="Home"><img class="theme-logo" src="${logo}" alt=""></a>
            <div>
                <a href="/wiki/Home.html">Home</a>
                <a href="/wiki/Credits.html">Credits</a>
            </div>
            <div>
                <strong>Characters</strong>
                <p>Skyrim</p>
                <a href="/wiki/Dranleic_Haligdrake.html">Dranleic Haligdrake</a>
                <a href="/wiki/Pharis_Ironeye.html">Pharis Ironeye</a>
                <span>Lahvriiluz</span>
                <p>Oblivion</p>
                <span>Priscilla Aurora</span>
                <p>Morrowind</p>
                <span>Gwyndolin Golden-Wing</span>
            </div>
        </nav>
    </div>
</header>`

    function pageFooter(outer) {
        return `
<section class="page-footer ${outer ? "page-footer--outer" : "page-footer--inline"}">
    <div class="wrapper w-footer">
        <div class="footer-inner">
            <div class="footer-flex-left">
                <img src="/images/Shadowmarks_Thieves_Guild_Sign_darkmode.png" class="light-mode-invert" width="50" height="50" alt="">
                <div class="footer-brand-heading">
                    <strong style="color: var(--text-h)">Himmeloften</strong>
                    <p>A personal character lore archive</p>
                </div>
            </div>
            <div class="footer-flex-right">
                <h5 style="letter-spacing: 2px; padding: 0">EXPLORE</h5>
                <ul class="footer-explore-links"><a href="/wiki/Home.html">Home</a><a href="/wiki/Credits.html">Credits &amp; Legal</a><a href="mailto:bytzwastaken@protonmail.com&amp;subject=Suggestion%20for%20an%20improvement%20on%20Himmeloften">Suggest improvements</a></ul>
            </div>
        </div>
    </div>
</section>`
    }

    var siteFooter = `
<footer class="site-footer">${pageFooter(true)}
    <div class="footer-bottom-wrapper">
        <div class="footer-copyright">
            <p>© ${new Date().getFullYear()} Tobias R. aka. BytZ · Unofficial fan project, not affiliated with or endorsed by Bethesda Softworks or ZeniMax Media. The Elder Scrolls and related names and materials belong to their respective owners.</p>
        </div>
    </div>
</footer>`

    var tableOfContents = `
<div class="toc-scroll-shell">
    <div class="vector-sticky-container">
        <nav class="vector-toc">
            <div class="vector-container">
                <div class="vector-toc-element">
                    <ul class="vector-toc-contents">
                        <li class="top-heading"><b>Back to top</b></li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
    <div class="toc-scrollbar-skin">
        <button class="toc-scrollbar-arrow toc-scrollbar-arrow-top" aria-label="Scroll table of contents up"><img src="/assets/Scroll_Bar_Top.png" alt=""></button>
        <div class="toc-scrollbar-track" style="background-image: url(/assets/Scroll_Bar_Mid.png)">
            <div class="toc-scrollbar-thumb"></div>
        </div>
        <button class="toc-scrollbar-arrow toc-scrollbar-arrow-bottom" aria-label="Scroll table of contents down"><img src="/assets/Scroll_Bar_Bottom.png" alt=""></button>
    </div>
</div>`

    var notices = {
        language: `
<div data-lang-only="dov" hidden>
    <div class="mw-page-notice__lang">
        <button type="button" class="page-notice-close-button">X</button>
        <div class="notice-content-wrapper">
            <strong class="notice-header">WARNING</strong>
            <div class="notice-content">
                <p>You have changed the language to <a data-preview="https://en.uesp.net/wiki/Lore:Dragon_Language">Dovahzul</a>, the language of dragons!</p>
                <p>If you are not a dragon, or aren't well versed in the <a data-preview="https://en.uesp.net/wiki/Lore:Thu%27um">Thu'um</a>, you'd be advised to revert back to your prefered language.</p>
                <br>
                <p id="resources-text">If this was intentional and you are learning - or trying to learn - Dovahzul, consider using the resources below, so you have a chance at reading the page.</p>
            </div>
            <ul>
                <li><a target="new" href="https://www.thuum.org/library/Dovahzul%20Print%20Dictionary%204th%20Edition.pdf">Dovahzul Dictionary 4th Edition</a></li>
                <li><a target="new" href="https://www.thuum.org/assets/Learning%20Dovahzul.pdf">Learning Dovahzul - First Edition - from www.thuum.org</a></li>
                <li><a target="new" href="https://www.thuum.org/translator.php">Dovahzul to English translator</a></li>
            </ul>
        </div>
    </div>
</div>`,
        construction: `
<div class="mw-page-notice">
    <div class="notice-content-wrapper">
        <strong class="notice-header">UNDER CONSTRUCTION!</strong>
        <div class="notice-content">
            <p>This page is still under construction and is missing a lot of content!</p>
            <p>You can still browse the page as you like, but there may not be much to see...</p>
            <p>Proceed to a different page, or go back to the home page <a href="/wiki/Home.html">here</a>.</p>
        </div>
    </div>
</div>`,
        "missing-translation": `
<div class="mw-page-notice">
    <div class="notice-content-wrapper">
        <strong style="color: --text-h">This page seems to be missing translation for one or more languages</strong>
        <div class="notice-content">
            <p>Unfortunately, this means some may not be able to read the page.</p>
            <p>However, they will be added at a later date!</p>
        </div>
    </div>
</div>`,
    }

    // Each tag replaces itself with its markup as soon as the browser reads it
    function definePart(tagName, render) {
        customElements.define(tagName, class extends HTMLElement {
            connectedCallback() {
                var template = document.createElement("template")
                template.innerHTML = render(this).trim()
                this.replaceWith(template.content)
            }
        })
    }
    definePart("site-header", function () { return siteHeader })
    definePart("site-footer", function () { return siteFooter })
    definePart("page-footer", function () { return pageFooter(false) })
    definePart("table-of-contents", function () { return tableOfContents })
    definePart("page-notice", function (element) {
        var type = element.getAttribute("type")
        if (!notices[type]) console.error("<page-notice> has no type called \"" + type + "\"")
        return notices[type] || ""
    })
})()
