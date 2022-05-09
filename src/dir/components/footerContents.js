export default function footerContents() {

    const contents = document.createElement('div');
    contents.id = 'copyright';
    contents.textContent = 'Copyright ©2022 DS Web Development';

    return contents;
}