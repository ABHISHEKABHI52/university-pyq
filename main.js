document.addEventListener('DOMContentLoaded', () => {
  const searchBar = document.getElementById('searchBar');
  const content = document.getElementById('content');

  const questionPapers = [
      { year: '2020', subject: 'M1', file: 'https://drive.google.com/file/d/1B5rL8gacX7O6WDtdWphKzghdXfSeSFqt/view?usp=drive_link' },
      { year: '2021', subject: 'M1', file: 'https://drive.google.com/file/d/1Pas-EAYzSo76jcgFLnBbxf2XI-D7ZV3M/view?usp=drive_link' },
      { year: '2022', subject: 'M1', file: 'https://drive.google.com/file/d/1YrkK1bdM6in-H0zw-6Ye0XGVNUAzlCpt/view?usp=drive_link' },
      { year: '2023', subject: 'M1', file: 'https://drive.google.com/file/d/1-UDvOn05e2A_09bnR9nRNQThwRRwRYXh/view?usp=drive_link' },
      { year: '2024', subject: 'M1', file: 'https://drive.google.com/file/d/1tarPbEzRH_pTqOW2Sp92T9mzRC-uqIxb/view?usp=drive_link' },


      { year: '2020', subject: 'PHYSICS', file: 'https://drive.google.com/file/d/1sS9ivtx2uNQOBWmVrGtByP_aB8YgOhk4/view?usp=drive_link' },
      { year: '2021', subject: 'PHYSICS', file: 'https://drive.google.com/file/d/10LD4c6mk62wYd1xd19XTB4o0rWepFuJB/view?usp=drive_link' },
      { year: '2022', subject: 'PHYSICS', file: 'https://drive.google.com/file/d/1XkOJTTFXCYhlX2IlffghAWlTHNwPqpEP/view?usp=drive_link' },
      { year: '2023', subject: 'PHYSICS', file: 'https://drive.google.com/file/d/1YzQBy-Oa-N7EzWbC_rb6CaTq16cPuGt5/view?usp=drive_link' },
      { year: '2024', subject: 'PHYSICS', file: 'https://drive.google.com/file/d/1AArcy_5Ckp1-qLKBMCzNVnKvoBuOQTpV/view?usp=drive_link' },


      { year: '2020', subject: 'BEEE', file: 'https://drive.google.com/file/d/1ii-ROfAcO_xuRvESro8kb2fO2dbGMvEY/view?usp=drive_link' },
      { year: '2021', subject: 'BEEE', file: 'https://drive.google.com/file/d/1UEczGLjhQBfbycKWlld-xX5mcVT4KIXu/view?usp=drive_link' },
      { year: '2022', subject: 'BEEE', file: 'https://drive.google.com/file/d/1zalrmgUD4yA3PYUNxWMuIBK_vHAFnpMK/view?usp=drive_link' },
      { year: '2023', subject: 'BEEE', file: 'https://drive.google.com/file/d/12-Iw34mx5pO7-CVMiuOeNQT0OYpJDqgA/view?usp=drive_link' },
      { year: '2024', subject: 'BEEE', file: 'https://drive.google.com/file/d/1qRkrW6AOYFjgZ9JRA7rMisYuGtCfHh8x/view?usp=drive_link' },


      { year: '2020', subject: 'EGD', file: 'https://drive.google.com/file/d/1pD7S2H2VTyNJKL638n24IR1Z8SIuBy3W/view?usp=drive_link' },
      { year: '2021', subject: 'EGD', file: 'https://drive.google.com/file/d/1rMDDYHRGMnn2QDMFeRb8qptAqu4GS4AK/view?usp=drive_link' },
      { year: '2022', subject: 'EGD', file: 'https://drive.google.com/file/d/1mYgKA6bZSs0IKgZRTRlsfeqMZE1YLP_h/view?usp=drive_link' },
      { year: '2023', subject: 'EGD', file: 'https://drive.google.com/file/d/1HeTWNGfxwPIzLkaY53dR7sY9UZS5o4Vq/view?usp=drive_link' },
      { year: '2024', subject: 'EGD', file: 'https://drive.google.com/file/d/1_7bOCkFEY-CgC-NhvVFMxvVafXuUFNS_/view?usp=drive_link' },


      { year: '2020', subject: 'FOC', file: 'https://drive.google.com/file/d/1-C_ilbVubiGUiVfw0FcDDfE2gvnYlYLz/view?usp=drive_link' },
      { year: '2021', subject: 'FOC', file: 'https://drive.google.com/file/d/1dYx94BVG7cM9_Y9b22SBqjgqUyEkRelE/view?usp=drive_link' },
      { year: '2022', subject: 'FOC', file: 'https://drive.google.com/file/d/1fAR5FFr8ZNrEqlqkuatxDB6GP7fBy7RX/view?usp=drive_link' },
      { year: '2023', subject: 'FOC', file: 'https://drive.google.com/file/d/1GyvW9gl95P8Gte3PlRF9RsM2OuDyfWek/view?usp=drive_link' },
      { year: '2024', subject: 'FOC', file: 'https://drive.google.com/file/d/1TI-Ku7oR5nOZmnvDDEIl_BL-P1x_1tXY/view?usp=drive_link' },


      { year: '2020', subject: 'CHEMISTRY', file: 'https://drive.google.com/file/d/1GjDv9hHsVZMxOCHwrjMRLBMBB09zBY4z/view?usp=drive_link' },
      { year: '2021', subject: 'CHEMISTRY', file: 'https://drive.google.com/file/d/10u7uo58NiH0qnmUud9RtOXNhL7uP8nli/view?usp=drive_link' },
      { year: '2022', subject: 'CHEMISTRY', file: 'https://drive.google.com/file/d/1io_MhJbuPrI9d_ckbo9tL9bDY2nFSYTa/view?usp=drive_link' },
      { year: '2023', subject: 'CHEMISTRY', file: 'https://drive.google.com/file/d/1dqp-lDVLqCmPrWteUpH_crDCgJTa1cWt/view?usp=drive_link' },
      { year: '2024', subject: 'CHEMISTRY', file: 'https://drive.google.com/file/d/1mq6IFEIjxSOKIwp2iCfH31FrpmHKmqVC/view?usp=drive_link' },


      { year: '2020', subject: 'M2', file: 'https://drive.google.com/file/d/14z71QC_ORy6RhH0GZ3zLs4yorsiuZyk4/view?usp=drive_link' },
      { year: '2021', subject: 'M2', file: 'https://drive.google.com/file/d/1hhwBUgC7_x4VdxHEMpsXhSYO2fkBJ8Nj/view?usp=drive_link' },
      { year: '2022', subject: 'M2', file: 'https://drive.google.com/file/d/1uaVM8Ire35ZEWVjOiisRPkNxAqQvFCok/view?usp=drive_link' },
      { year: '2023', subject: 'M2', file: 'https://drive.google.com/file/d/1I6fsxzdwDAb2xC-nNYhSweDkJY1sDsI6/view?usp=drive_link' },
      { year: '2024', subject: 'M2', file: 'https://drive.google.com/file/d/1kzKk49kmFgXSjn0QvW6bV49upPe2c-gv/view?usp=drive_link' },


      { year: '2020', subject: 'BCEM', file: 'https://drive.google.com/file/d/1ipJQD3ccub1SR6UXfsUTAVY_CoMwTc7M/view?usp=drive_link' },
      { year: '2021', subject: 'BCEM', file: 'https://drive.google.com/file/d/1NaGVcB_pyvhoMTQiu71zh5J4ebPX628l/view?usp=drive_link' },
      { year: '2022', subject: 'BCEM', file: 'https://drive.google.com/file/d/1hZntSE04V8jBikPWWDHg1fCcc4mbvAhL/view?usp=drive_link' },
      { year: '2023', subject: 'BCEM', file: 'https://drive.google.com/file/d/1z0fsp-8YWMIGRguVuKfc_wNesQ4zpxcQ/view?usp=drive_link' },
      { year: '2024', subject: 'BCEM', file: 'https://drive.google.com/file/d/13iMPbpXdUfNBVLQOlzJBJB9hLcepAKo8/view?usp=drive_link' },


      { year: '2020', subject: 'PPS', file: 'https://drive.google.com/file/d/1PHdWnckxitk86ddcvuscuKVSCYI1iiez/view?usp=drive_link' },
      { year: '2021', subject: 'PPS', file: 'https://drive.google.com/file/d/1O6sEPgWTc_-v8kZBqyRZMOdJvbx6I58Q/view?usp=drive_link' },
      { year: '2022', subject: 'PPS', file: 'https://drive.google.com/file/d/1kyHMeaH-6CzvXTUdMo0rOxXqelWgBgBG/view?usp=drive_link' },
      { year: '2023', subject: 'PPS', file: 'https://drive.google.com/file/d/11__M-1qUfv2bb-W1W7kO5Ry_HbhoI-yE/view?usp=drive_link' },
      { year: '2024', subject: 'PPS', file: 'https://drive.google.com/file/d/1atyAGkUoGa64BmuWPyW47HcaYsNlK5-E/view?usp=drive_link' },


      { year: '2020', subject: 'ENGLISH', file: 'https://drive.google.com/file/d/1vfkP8oyIavQeeG_RsHRWgv50QCQwASyJ/view?usp=drive_link' },
      { year: '2021', subject: 'ENGLISH', file: 'https://drive.google.com/file/d/1H8DKRCUJPle-qbXIPLf9R8fm52GgnJiD/view?usp=drive_link' },
      { year: '2022', subject: 'ENGLISH', file: 'https://drive.google.com/file/d/1IS1bVvphZBOSh5YMOi-6wuMh2YSrJR6m/view?usp=drive_link' },
      { year: '2023', subject: 'ENGLISH', file: 'https://drive.google.com/file/d/1dKhZC6i7jJjHKb1ST4SsveGsySvjrUAB/view?usp=drive_link' },
      { year: '2024', subject: 'ENGLISH', file: 'https://drive.google.com/file/d/1wphyycqr6rZEKBQkxq_-DeAxVZChBg22/view?usp=drive_link' },


      // Add more entries as needed
  ];

  const displayPapers = (papers) => {
      content.innerHTML = '';
      papers.forEach(paper => {
          const card = document.createElement('div');
          card.className = 'card';
          card.innerHTML = `
              <p><strong>${paper.subject}</strong></p>
              <p>${paper.year}</p>
              <a href="${paper.file}" target="_blank">Download</a>
          `;
          content.appendChild(card);
      });
  };

  searchBar.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase();
      const filteredPapers = questionPapers.filter(paper =>
          paper.subject.toLowerCase().includes(searchTerm) ||
          paper.year.includes(searchTerm)
      );
      displayPapers(filteredPapers);
  });

  displayPapers(questionPapers);
});
