// app.js
// 필요한 라이브러리 및 초기 설정을 수행합니다.

// 라우터 설정
function handleNavigation() {
    const path = window.location.hash;
    
    switch(path) {
      case '#home':
        loadContent('home');
        break;
      case '#about':
        loadContent('about');
        break;
      case '#contact':
        loadContent('contact');
        break;
      default:
        loadContent('home');
        break;
    }
  }
  
  // 콘텐츠 로드
  function loadContent(page) {
    const contentDiv = document.getElementById('content');
    
    // Ajax 등을 사용하여 서버에서 해당 페이지의 콘텐츠를 가져옵니다.
    // 가져온 콘텐츠를 contentDiv에 삽입합니다.
    // 예시로 각 페이지의 내용을 정적으로 작성하는 방법을 사용합니다.
    switch(page) {
      case 'home':
        contentDiv.innerHTML = '<h2>Home</h2><p>Welcome to the home page.</p>';
        break;
      case 'about':
        contentDiv.innerHTML = '<h2>About</h2><p>About us...</p>';
        break;
      case 'contact':
        contentDiv.innerHTML = '<h2>Contact</h2><p>Contact information...</p>';
        break;
    }
  }
  
  // 페이지 로드 시 라우터를 처리합니다.
  window.addEventListener('DOMContentLoaded', handleNavigation);
  window.addEventListener('hashchange', handleNavigation);
  

  