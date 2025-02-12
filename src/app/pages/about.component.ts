import { Component } from '@angular/core';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-about',
  animations: [
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('500ms ease-in', style({ opacity: 1 }))
      ])
    ])
  ],
  template: `
    <div @fadeIn>
      <h1>About Persifon: Pioneering the Future of Finance and Education</h1>
      <p>At Persifon, we’re reimagining the way the world transacts, learns, and connects. Born at the intersection of cutting-edge DAG innovation and practical real-world solutions, we’re a dynamic technology company driving two revolutionary missions: redefining global finance and empowering the next generation of students.</p>
      
      <h2>Redefining Global Payments with Next-Gen Blockchain</h2>
      <p>Traditional payment systems are slow, costly, and fragmented. Persifon is changing that. Our proprietary international payment platform leverages the power of Directed Acyclic Graph (DAG) architecture and the Proof of History (PoH) protocol to create a lightning-fast, secure, and scalable ecosystem. Unlike conventional blockchains, our DAG-based cryptocurrency eliminates bottlenecks, enabling near-instant transactions with negligible fees—whether you’re sending funds across borders or trading digital assets.</p>
      
      <h3>DAG Technology</h3>
      <p>Say goodbye to linear blocks. Our decentralized structure allows parallel transaction processing, making Persifon’s network infinitely scalable and eco-friendly.</p>
      
      <h3>Proof of History</h3>
      <p>By cryptographically verifying time itself, PoH ensures unmatched security and consensus efficiency, setting a new standard for trust in decentralized finance.</p>
      
      <p>We’re not just building a cryptocurrency; we’re crafting the infrastructure for a borderless financial future.</p>
      
      <h2>Empowering Education with Smart Identity Solutions</h2>
      <p>Innovation isn’t limited to finance. Persifon is proud to collaborate with Kazan Federal University, one of Russia’s oldest and most prestigious academic institutions, to develop a next-generation Student ID System. This digital identity platform integrates blockchain technology to streamline campus life, offering:</p>
      <ul>
        <li>Secure, tamper-proof student credentials.</li>
        <li>Seamless access to academic records, dormitories, and campus facilities.</li>
        <li>Integration with payment systems for tuition, meals, and more.</li>
      </ul>
      
      <p>By digitizing student identities, we’re reducing administrative friction and empowering over 50,000 students to focus on what truly matters: learning, growing, and shaping tomorrow.</p>
      
      <h2>Our Vision</h2>
      <p>Persifon exists to bridge the gap between revolutionary technology and everyday needs. Whether it’s enabling a farmer in Kenya to receive cross-border payments in seconds or helping a student in Kazan navigate campus with a tap of their phone, we’re committed to creating solutions that are inclusive, impactful, and ahead of their time.</p>
      
      <h2>Core Values</h2>
      <ul>
        <li><strong>Transparency:</strong> Every line of code, every transaction, and every partnership is built on openness.</li>
        <li><strong>Collaboration:</strong> From global enterprises to universities, we believe innovation thrives in partnership.</li>
        <li><strong>Education:</strong> We’re not just building tools—we’re fostering a community that learns, adapts, and leads.</li>
        <li><strong>Responsibility:</strong> Sustainability and ethical tech are non-negotiable in our quest to disrupt industries.</li>
      </ul>
      
      <h2>Join Us on the Journey</h2>
      <p>Persifon is more than a company. We’re a collective of engineers, dreamers, and problem-solvers dedicated to rewriting the rules. Whether you’re a developer, investor, student, or forward-thinking organization, we invite you to explore how our technology can transform your world.</p>
      
      <p>Welcome to the future. Welcome to Persifon.</p>
    </div>
  `,
})
export class AboutComponent {}
