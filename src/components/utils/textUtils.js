export const formatTranslationKey = (name) => {
    return name
      .replace(/\s+/g, '-')       // Reemplace spaces with '-'
      .replace(/\//g, '-')        // Reemplace '/' with '-'
      .toLowerCase();
  };