import {
    AudioLines,
    Camera,
    Hammer,
    HandCoins,
    Image,
    Lightbulb,
    MessageCircle,
    NotebookPen,
    Paintbrush,
    Scale,
    Video,
    Workflow,
} from 'lucide-react';

export default function IconResolver({ name }: { name: string }) {
    if (name === 'audio-voice') return <AudioLines className="h-6 w-6" />;
    if (name === 'writing-copywriting')
        return <NotebookPen className="h-6 w-6" />;
    if (name === 'design-graphics') return <Paintbrush className="h-6 w-6" />;
    if (name === 'photo-creation-editing')
        return <Camera className="h-6 w-6" />;
    if (name === 'ideation-research') return <Lightbulb className="h-6 w-6" />;
    if (name === 'legal-compliance') return <Scale className="h-6 w-6" />;
    if (name === 'monetization') return <HandCoins className="h-6 w-6" />;
    if (name === 'productivity-workflow')
        return <Workflow className="h-6 w-6" />;
    if (name === 'social-media-distribution')
        return <MessageCircle className="h-6 w-6" />;
    if (name === 'video-creation-editing') return <Video className="h-6 w-6" />;
    if (name === 'web-app-tools') return <Hammer className="h-6 w-6" />;
    return <Image className="h-6 w-6" />;
}
