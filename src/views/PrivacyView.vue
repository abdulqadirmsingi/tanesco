<template>
  <div class="min-h-screen bg-gradient-to-b from-green-50 to-white py-12 px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold text-green-800 text-center mb-8">Privacy Policy</h1>
      <p class="text-green-700 mb-8 text-center">
        TANESCO SACCOS LTD operates the website www.tanescosaccos.or.tz, which provides financial information services.
      </p>
      
      <div class="space-y-6">
        <div v-for="(section, index) in sections" :key="index" class="bg-white rounded-lg shadow-md overflow-hidden">
          <button 
            @click="toggleSection(index)" 
            class="w-full px-6 py-4 text-left focus:outline-none flex justify-between items-center"
            :class="{'bg-green-100': expandedSection === index}"
          >
            <span class="text-lg font-semibold text-green-800">{{ section.title }}</span>
            <svg 
              :class="{'transform rotate-180': expandedSection === index}"
              class="w-5 h-5 text-green-600 transition-transform duration-200"
              xmlns="http://www.w3.org/2000/svg" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
          </button>
          <div v-show="expandedSection === index" class="px-6 py-4 bg-green-50">
            <p class="text-green-700">{{ section.content }}</p>
          </div>
        </div>
      </div>

      <div class="mt-12 text-center">
        <h2 class="text-2xl font-semibold text-green-800 mb-4">Contact Us</h2>
        <p class="text-green-700">
          If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at
          <a href="mailto:info.saccos@tanescosaccos.or.tz" class="text-green-600 hover:underline">info.saccos@tanescosaccos.or.tz</a>.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const expandedSection = ref(null);

    const toggleSection = (index) => {
      expandedSection.value = expandedSection.value === index ? null : index;
    };

    const sections = [
      {
        title: "Information Collection and Use",
        content: "For a better experience, while using our website, we may require you to provide us with certain personally identifiable information, including but not limited to your name, phone number, and postal address. The information that we collect will be used to contact or identify you."
      },
      {
        title: "Log Data",
        content: "We want to inform you that whenever you visit our website, we collect information that your browser sends to us that is called Log Data. This Log Data may include information such as your computer's Internet Protocol address, browser version, pages of our Service that you visit, the time and date of your visit, the time spent on those pages, and other statistics."
      },
      {
        title: "Cookies",
        content: "Cookies are files with a small amount of data that is commonly used as an anonymous unique identifier. These are sent to your browser from the website that you visit and are stored on your computer's hard drive. Our website uses these to collect information and to improve the customer journey and user experience on our website. You have the option to either accept or refuse these cookies and know when a cookie is being sent to your computer. If you choose to refuse our cookies, you may not be able to use some portions of our service."
      },
      {
        title: "Service Providers",
        content: "We may employ third-party companies and individuals due to the following reasons: To facilitate the operation of our website, to provide the service on our behalf, to perform service-related services, or to assist us in analysing the use of our service. We want to inform our visitors that these third parties have access to your Personal Information. The reason is to perform the tasks assigned to them on our behalf. However, they are obligated not to disclose or use the information for any other purpose."
      },
      {
        title: "Security",
        content: "We value your trust in providing us with your personal information, thus we are striving to use commercially acceptable means of protecting it. But remember that no method of transmission over the internet, or method of electronic storage is 100% secure and reliable, and we cannot guarantee its absolute security."
      },
      {
        title: "Links to Other Sites",
        content: "Our website may contain links to other sites. If you click on a third-party link, you will be directed to that site. Note that these external sites are not operated by us. Therefore, we strongly advise you to review the Privacy Policy of these websites. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services."
      },
      {
        title: "Children's Privacy",
        content: "Our Services do not address anyone under the age of 18. We do not knowingly collect personally identifiable information from children under 18. In the case we discover that a child under 18 has provided us with personal information, we immediately delete this from our servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact us so that we will be able to do the necessary actions."
      },
      {
        title: "Changes to This Privacy Policy",
        content: "We may update our Privacy Policy from time to time. Thus, we advise you to review this page periodically for any changes. We will notify you of any changes by posting the new Privacy Policy on this page, please always check the most recent reviewed date. These changes are effective immediately after they are posted on this page."
      }
    ];

    return {
      expandedSection,
      toggleSection,
      sections
    };
  }
};
</script>