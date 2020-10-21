const details = document.querySelectorAll('.details');

const checkDetail = e => {
    e.preventDefault();
    const detail = e.currentTarget;
    const summary = detail.querySelector('.details__summary');
    const content = detail.querySelector('.details__content');

    if (detail.hasAttribute('open')) {
        detail.style.height = `${summary.clientHeight}px`;
        setTimeout(() => {
            detail.removeAttribute('open');
        }, 300);
    } else {
        detail.setAttribute('open', true);
        detail.style.height = `${detail.clientHeight + content.clientHeight}px`;
    }
};

const init = () => {
    boxAnimation();
    details.forEach(detail => {
        const summary = detail.querySelector('.details__summary');
        const content = detail.querySelector('.details__content');

        !detail.hasAttribute('open')
            ? (detail.style.height = `${summary.clientHeight}px`)
            : (detail.style.height = `${summary.clientHeight + content.clientHeight}px`);

        detail.addEventListener('click', checkDetail);
    });
};

const boxAnimation = () => {
    const summaries = document.querySelectorAll('.details__summary');
    const photoClassList = document.querySelector('.faq__photo').classList;
    summaries.forEach(summary => {
        summary.addEventListener('mouseover', () => photoClassList.add('anim-left'));
        summary.addEventListener('mouseout', () => photoClassList.remove('anim-left'));
    });
};

init();
