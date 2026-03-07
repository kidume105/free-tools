async function trackEvent(eventType, toolSlug = null, queryText = null, metadata = {}) {
  try {
    await supabaseClient.from('events').insert([
      {
        event_type: eventType,
        tool_slug: toolSlug,
        page_url: window.location.pathname,
        query_text: queryText,
        metadata: metadata
      }
    ]);
  } catch (err) {
    console.error('Tracking error:', err.message);
  }
}

window.addEventListener('load', () => {
  trackEvent('page_view');
});
