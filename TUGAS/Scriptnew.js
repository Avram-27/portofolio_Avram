document.addEventListener('DOMContentLoaded', () => {
    
    const contactData = {
        email: "radinalavram@apps.ipb.ac.id",
        linkedinLink: "https://www.linkedin.com/in/nama-profil-anda", // Ganti dengan link LinkedIn Anda
        instagramHandle: "Inal_avram"
    };

    const loadContent = (data) => {
        const storySection = document.getElementById('my-story');
        const contactSection = document.getElementById('contact-me');
        const storeSection = document.getElementById('my-store');

        if (storySection) {
            storySection.innerHTML = `
                <h2>📚 My Story</h2>
                <img src="rangkaian.jpg" width="250" >
                <img src="projectp2.jpg" width="250" >
                <img src="solder.jpg" width="250">
                <br>
                <br>
                <br>
                <br><p>Perjalanan saya sebagai mahasiswa Teknologi Rekayasa Komputer di Sekolah Vokasi (SV) IPB University adalah eksplorasi mendalam tentang bagaimana logika yang terstruktur dapat mewujudkan solusi teknologi yang nyata.
                Minat utama saya berakar pada pemecahan masalah dan rekayasa sistem. Saya menemukan kepuasan besar dalam mengubah ide abstrak menjadi perangkat keras dan perangkat lunak yang berfungsi. Setiap proyek adalah tantangan untuk menganalisis, merancang dan mengimplementasikan sistem yang efisien dan andal.</P>
            `;
        }
        
        if (storeSection) {
            storeSection.innerHTML = `
                <h2>🖼️ Gallery</h2>
                <img src="Fotbarbasket.jpg" width="250" alt="Foto Tim Basket">
                <img src="Piano.jpg" width="250" alt="Foto Piano">
                <img src="fotoproject.jpg" width="250" alt="Foto Proyek">
                <br>
                <br>
                <br><p>Selamat datang di Galeri saya, sebuah ruang di mana logika rekayasa bertemu dengan ekspresi visual. Bagian ini adalah manifestasi dari semua yang saya pelajari dan kerjakan—baik di dalam kurikulum Teknologi Rekayasa Komputer SV IPB, maupun dalam eksplorasi kreatif pribadi.
                Galeri ini adalah bukti bahwa keterampilan teknis dan kreativitas dapat saling melengkapi, menciptakan solusi yang tidak hanya fungsional, tetapi juga indah dan bermakna. Silakan jelajahi dan hubungi saya jika Anda tertarik untuk berdiskusi tentang salah satu proyek di sini</p>
            `;
        }
        if (contactSection) {
            contactSection.innerHTML = `
                <h2>✉️ Contact Me</h2>
                <p>Anda bisa menghubungi saya melalui:</p>
                <ul>
                    <li><i class="fas fa-envelope"></i> Email: <a href="mailto:${data.email}">${data.email}</a></li>
                    <li><i class="fab fa-linkedin"></i> LinkedIn: <a href="${data.linkedinLink}" target="_blank">Profil LinkedIn</a></li>
                    <li><i class="fab fa-instagram"></i> Instagram: <a href="https://instagram.com/${data.instagramHandle}" target="_blank">@${data.instagramHandle}</a></li>
                </ul>
            `;
        }
    };
    
    const navLinks = document.querySelectorAll('.nav-links a'); 
    const allContentSections = document.querySelectorAll('.page-section'); 
    const galleryButton = document.getElementById('check-gallery-btn'); 

    const switchContent = (targetId) => {
        allContentSections.forEach(section => {
            section.style.display = 'none'; 
        });

        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.style.display = (targetId === 'about-me') ? 'flex' : 'block';
            window.scrollTo({ top: 0, behavior: 'smooth' }); 
        }
        
        setActiveLink(targetId);
        
        history.pushState(null, '', `#${targetId}`); 
    };

    const setActiveLink = (targetId) => {
        navLinks.forEach(link => link.classList.remove('active'));
        
        const activeLink = document.querySelector(`.nav-links a[href="#${targetId}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    };

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1); 
            switchContent(targetId);
        });
    });

    if (galleryButton) {
        galleryButton.addEventListener('click', () => {
            switchContent('my-store'); 
        });
    }

    
    const initialTarget = window.location.hash.substring(1) || 'about-me';
    
    
    loadContent(contactData);
    switchContent(initialTarget);
});