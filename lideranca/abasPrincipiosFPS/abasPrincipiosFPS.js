const tabsAspectosFundLid = document.querySelectorAll('.tab-btn-AspectosFundLid');
tabsAspectosFundLid.forEach(tab => tab.addEventListener('click', () => tabClikedAspectosFundLid(tab)));

const tabClikedAspectosFundLid = (tab) => {
    tabsAspectosFundLid.forEach(tab => tab.classList.remove('active'));
    tab.classList.add('active');

    const contentsAspectosFundLid = document.querySelectorAll('.content-AspectosFundLid');
    contentsAspectosFundLid.forEach(content => content.classList.remove('show'));

    const contentId = tab.getAttribute('content-id');
    const content = document.getElementById(contentId);

    content.classList.add('show');
}

const currentActiveTabAspectosFundLid = document.querySelector('.tab-btn-AspectosFundLid.active');
if (currentActiveTabAspectosFundLid) {
    tabClikedAspectosFundLid(currentActiveTabAspectosFundLid);
}
