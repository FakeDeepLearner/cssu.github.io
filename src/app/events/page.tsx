import ContentCard from "@/components/ContentCard"
import groupBy from "@/lib/groupBy"

import { getAllFrontMatter } from "@/lib/collectContent"

// TODO: Generate dynamic sitemap

export default function Events() {
    const frontMatters = getAllFrontMatter("events")

    const groupedFrontMatters = groupBy(frontMatters, 3)

    return (
        <section className="section is-medium">
            <div className="section-container">
                <h1 className="title section-title">Events</h1>
                <div className="subtitle is-5 is-muted"></div>
                <div className="divider"></div>
                <div className="section">
                    {groupedFrontMatters.map((group, index) => (
                        <div key={index} className="columns">
                            {group.map((event, innerIndex) => (
                                <ContentCard
                                    key={`${index}${innerIndex}${event.title}`}
                                    contentType="events"
                                    title={event.title}
                                    summary={event.summary}
                                    contentSubdirectory={event.eventDirectory}
                                    image={event.summaryImage}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
