export default ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('CLOUDINARY_CLOUD_NAME'),  // اسم حساب Cloudinary الخاص بك
          api_key: env('CLOUDINARY_API_KEY'),       // مفتاح API الخاص بـ Cloudinary
          api_secret: env('CLOUDINARY_API_SECRET'), // سر API الخاص بـ Cloudinary
        },
        actionOptions: {
          upload: {}, // يمكن تركها فارغة
          delete: {}, // يمكن تركها فارغة
        },
      },
    },
  });
  