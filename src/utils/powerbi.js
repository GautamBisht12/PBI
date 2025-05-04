import {
  models
} from 'powerbi-client'

/**
 * Embeds a Power BI report into a container
 * @param {string} containerId - DOM element ID to embed the report
 * @param {string} reportId - Power BI report ID
 * @param {string} accessToken - Access token for Power BI
 * @param {string} embedUrl - URL to embed the report
 * @return {models.IEmbedConfiguration} - Embedded report instance
 */
export async function embedPowerBIReport(containerId, reportId, accessToken, embedUrl) {
  try {
    // Create configuration for embedding
    const config = {
      type: 'report',
      id: reportId,
      embedUrl: embedUrl,
      accessToken: accessToken,
      tokenType: models.TokenType.Embed,
      settings: {
        panes: {
          filters: {
            expanded: false,
            visible: true
          },
          pageNavigation: {
            visible: true
          }
        },
        background: models.BackgroundType.Transparent,
      },
      permissions: models.Permissions.Read,
      viewMode: models.ViewMode.View,
    }

    // Get a reference to the embed container
    const reportContainer = document.getElementById(containerId)

    // Embed the report
    const report = powerbi.embed(reportContainer, config)

    // Handle the loaded event
    report.on('loaded', function () {
      console.log('Report loaded successfully')
    })

    // Handle errors
    report.on('error', function (event) {
      console.error('Error loading report:', event.detail)
      throw new Error('Failed to load Power BI report')
    })

    return report
  } catch (error) {
    console.error('Error embedding report:', error)
    throw error
  }
}

/**
 * Get Power BI report details from the server
 * @param {string} reportId - ID of the report to fetch
 * @returns {Promise<Object>} Report configuration including tokens and embed URL
 */
export async function getPowerBIReportConfig(reportId) {
  try {
    // In production, this should call your backend API to get the report config
    const response = await fetch(`http://localhost:5000/get-embed-token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        reportId
      }), // assuming your backend can accept this
    });


    if (!response.ok) {
      throw new Error('Failed to fetch report configuration')
    }

    return await response.json()
  } catch (error) {
    console.error('Error fetching report config:', error)
    throw error
  }
}