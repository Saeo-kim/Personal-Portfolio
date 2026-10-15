/**
 * Ethan Miller Portfolio - Main Script
 * Version: 0.1
 */

document.addEventListener('DOMContentLoaded', () => {
    // 1. 내비게이션 메뉴 부드러운 스크롤 (Smooth Scroll)
    // 수정 전: document.querySelectorAll('nav a').forEach(anchor => {
    // 수정 후: 
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {e.preventDefault();
        // ... 기존 코드 ...
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log("포트폴리오 시스템이 준비되었습니다.");
});