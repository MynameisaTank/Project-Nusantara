# Historical era carousel integration

The landing page's full-screen Topography shader has been removed and replaced by a historical image carousel section.

The carousel is implemented locally in `src/components/reactbits/FlexCarousel.tsx` with its stylesheet. It supports drag/swipe, keyboard arrows, active-card selection, captions, responsive sizing, and reduced-motion-friendly CSS. It is a lightweight project-native implementation of the supplied interaction brief; it does not include the original React Bits OGL liquid-lens shader implementation.

Historical image references use Wikimedia Commons Special:FilePath URLs. Individual file descriptions and licensing can be checked on Wikimedia Commons before production deployment. The image assets are loaded remotely and therefore require an internet connection.
