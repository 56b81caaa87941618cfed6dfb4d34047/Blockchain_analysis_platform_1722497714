/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1722497718", {
    template: `
    <footer id="footer-section" class="flex-1 bg-gradient-to-r from-pink-500 to-purple-600 backdrop-filter backdrop-blur-lg bg-opacity-30 border border-pink-300 border-opacity-30 rounded-lg shadow-lg">
            <div id="footer-container" class="max-w-screen-xl p-8 py-12 mx-auto lg:py-20 md:p-12 lg:p-16">
                <hr id="footer-divider" class="my-8 border-pink-300 border-opacity-30 sm:mx-auto lg:my-12">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-6 text-3xl font-bold text-white">
                            <img id="footer-logo" src="./images/logo.svg" class="h-8 mr-4 sm:h-12 filter drop-shadow-lg" alt="Landwind Logo" />
                            BlocksEye - Blockchain Analytics Platform
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-lg text-center text-white font-medium">
                        Stay ahead of the curve with BlocksEye. Our cutting-edge platform provides real-time analysis and insights into the latest blockchain data, transactions, and trends. Powered by AI and machine learning, we help you make informed decisions in the dynamic world of decentralized technologies.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
